#!/usr/bin/env python3
"""
绘本数据扫描器 - 扫描 D:\绘本 目录，生成完整的 books.json 索引文件
支持：
- 绘本基本信息（标题、系列分类、页数）
- 图片列表（封面+内页）
- 音频文件路径
- 时间轴映射（音频时间点 ↔ 图片对应关系）
"""

import os
import json
import re
from pathlib import Path
from collections import defaultdict

# ======================== 配置 ========================
# ⚠️ 从 config.json 统一读取配置（只需修改一处）
_CONFIG_PATH = Path(__file__).parent / "config.json"
if _CONFIG_PATH.exists():
    _config = json.loads(_CONFIG_PATH.read_text(encoding="utf-8"))
    BASE_DIR = Path(_config["booksDir"])
else:
    print("[错误] 找不到配置文件 config.json")
    exit(1)

# 输出文件：保存到项目目录
OUTPUT_FILE = Path(__file__).parent / "books.json"
# =====================================================


def parse_timestamp(ts_str: str) -> float:
    """将时间字符串 (如 1:40.667) 转换为秒数"""
    ts_str = ts_str.strip()
    parts = ts_str.split(":")
    if len(parts) == 2:
        minutes, seconds = parts
        return float(minutes) * 60 + float(seconds)
    return float(ts_str)


def extract_series(book_folder_name: str) -> tuple[str, str]:
    """从文件夹名提取编号和标题，并推断系列分类"""
    # 文件夹格式: "序号_标题"  或  "序号_系列 标题"
    match = re.match(r'^(\d+)_(.+)$', book_folder_name)
    if not match:
        return "", book_folder_name, "其他"

    book_id = match.group(1)
    full_title = match.group(2)

    # 系列分类规则
    series_rules = [
        ("凯迪克金奖", "凯迪克金奖"),
        ("沃野童书", "沃野童书"),
        ("车车趣味故事书", "车车趣味故事书"),
        ("宝宝情商培养", "宝宝情商培养"),
        ("嘻哈农场", "嘻哈农场"),
        ("幼儿自我保护", "幼儿自我保护"),
        ("大蝴蝶小姐姐", "大蝴蝶小姐姐"),
        ("二十四节气旅行", "二十四节气旅行"),
        ("宝宝健康成长", "宝宝健康成长"),
        ("中国民间童话", "中国民间童话"),
        ("小猫汤米", "小猫汤米"),
        ("心理成长启蒙", "心理成长启蒙童话"),
        ("幼儿自理能力", "幼儿自理能力启蒙"),
        ("交通工具认知", "交通工具认知"),
        ("小恐龙哈迪", "小恐龙哈迪"),
        ("花婆婆·方素珍", "花婆婆·方素珍原创绘本馆"),
        ("小熊帕丁顿", "小熊帕丁顿"),
        ("彼得免经典", "彼得兔经典故事集"),
        ("沃尔特·克兰", "沃尔特·克兰故事集"),
        ("植物大战僵尸", "植物大战僵尸吉品爆笑漫画"),
        ("乐高节日", "乐高节日绘本"),
        ("爆笑虫子", "爆笑虫子拼音故事书"),
        ("冰箱家族", "冰箱家族"),
        ("童眼认标志", "童眼认标志"),
        ("童眼认兵器", "童眼认兵器"),
        ("童眼认动物", "童眼认动物"),
        ("儿童数学启蒙", "儿童数学启蒙图画书"),
        ("生命的故事", "生命的故事"),
        ("教孩子", "财商教育绘本"),
        ("奇妙的人体", "奇妙的人体"),
        ("认识自然", "认识自然"),
        ("认识动物特征", "认识动物特征"),
        ("纯美珍藏", "经典名著绘本"),
        ("巴巴爸爸", "巴巴爸爸"),
        ("维尼吉亚", "维尼吉亚作品集"),
        ("绘声绘色", "绘声绘色精选"),
        ("音乐在我的口袋里", "音乐绘本"),
        ("吉米", "吉米故事"),
        ("培迪", "培迪故事"),
        ("鲍比", "鲍比故事"),
        ("小鹿快闪", "小鹿快闪"),
        ("强盗老鼠", "强盗老鼠"),
        ("我会非常非常小心的", "安全绘本"),
        ("生活习惯", "生活习惯"),
    ]

    detected_series = "其他"
    display_title = full_title

    for keyword, series_name in series_rules:
        if keyword in full_title:
            detected_series = series_name
            # 从标题中去掉系列前缀，让显示更干净
            # 例如 "沃野童书 是谁画的小蛇" -> "是谁画的小蛇"
            prefix_match = re.match(r'^.+?\s+(.+)$', full_title)
            if prefix_match:
                display_title = prefix_match.group(1)
            break

    return book_id, display_title, detected_series


def scan_book(book_path: Path) -> dict | None:
    """扫描单本绘本，返回元数据字典"""
    if not book_path.is_dir():
        return None

    # 使用相对于 BASE_DIR 的路径，确保 URL 能正确映射
    try:
        rel_path = book_path.relative_to(BASE_DIR)
    except ValueError:
        rel_path = Path(book_path.name)

    # 统一使用正斜杠作为URL路径分隔符
    rel_path_str = str(rel_path).replace("\\", "/")
    folder_name = book_path.name
    book_id, title, series = extract_series(folder_name)

    # 收集图片文件
    images = []
    cover = None

    # 查找所有 jpg 文件
    jpg_files = sorted(
        [f for f in book_path.glob("*.jpg")],
        key=lambda f: f.name.lower()
    )

    for jpg in jpg_files:
        name_lower = jpg.name.lower()
        if name_lower == "封面.jpg":
            cover = f"{rel_path_str}/{jpg.name}"
        elif name_lower.endswith(".jpg"):
            # 内页图片（01.jpg, 02.jpg ...）
            images.append({
                "file": f"{rel_path_str}/{jpg.name}",
                "name": jpg.stem,
            })

    # 没有内页图片则跳过
    if not images:
        return None

    # 如果没有单独的封面文件，用第一张内页图作为封面
    if cover is None and images:
        cover = images[0]["file"]

    # 查找音频文件
    mp3_files = list(book_path.glob("*.mp3"))
    audio = f"{rel_path_str}/{mp3_files[0].name}" if mp3_files else None

    # 查找时间轴文件
    timeline = []
    time_files = list(book_path.glob("*_时间.txt"))
    if time_files:
        tf = time_files[0]
        try:
            with open(tf, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if "," not in line:
                        continue
                    parts = line.split(",")
                    if len(parts) >= 2:
                        img_name = parts[0].strip()
                        time_range = parts[1].strip()
                        # 解析 "开始-结束" 时间范围
                        tr_parts = time_range.split("-")
                        if len(tr_parts) == 2:
                            timeline.append({
                                "image": img_name,
                                "start": parse_timestamp(tr_parts[0]),
                                "end": parse_timestamp(tr_parts[1]),
                            })
        except Exception as e:
            print(f"  ⚠️ 读取时间轴失败 {tf.name}: {e}")

    return {
        "id": book_id,
        "title": title,
        "series": series,
        "folder": folder_name,
        "cover": cover,
        "pageCount": len(images),
        "images": images,
        "audio": audio,
        "timeline": timeline,
        "duration": timeline[-1]["end"] if timeline else 0,
        "hasAudio": audio is not None,
    }


def main():
    import sys
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

    print("=" * 60)
    print("📚 绘本数据扫描器")
    print(f"📂 扫描目录: {BASE_DIR}")
    print("=" * 60)

    books = []
    series_stats = defaultdict(int)

    # 遍历所有子文件夹（支持两层嵌套：BASE_DIR/系列/绘本）
    all_book_dirs = []
    for top_dir in sorted([d for d in BASE_DIR.iterdir() if d.is_dir()]):
        # 检查是否是直接包含jpg的绘本文件夹
        has_jpg = list(top_dir.glob("*.jpg"))
        if has_jpg:
            all_book_dirs.append(top_dir)
        else:
            # 否则扫描子目录
            for sub_dir in sorted([d for d in top_dir.iterdir() if d.is_dir()]):
                all_book_dirs.append(sub_dir)

    total = len(all_book_dirs)

    for idx, subdir in enumerate(all_book_dirs, 1):
        print(f"  [{idx}/{total}] 扫描: {subdir.name}")
        book = scan_book(subdir)
        if book:
            books.append(book)
            series_stats[book["series"]] += 1

    print(f"\n✅ 扫描完成！共 {len(books)} 本绘本\n")

    # 打印系列统计
    print("📊 系列分布:")
    for s, c in sorted(series_stats.items(), key=lambda x: -x[1]):
        print(f"   {s}: {c} 本")

    # 生成完整JSON
    output_data = {
        "meta": {
            "totalBooks": len(books),
            "totalSeries": len(series_stats),
            "scanPath": str(BASE_DIR),
            "generatedAt": __import__("datetime").datetime.now().isoformat(),
        },
        "series": dict(series_stats),
        "books": books,
    }

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"\n💾 索引文件已保存: {OUTPUT_FILE}")
    print(f"   文件大小: {OUTPUT_FILE.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    main()
