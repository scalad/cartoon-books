param([string]$Ffmpeg = 'C:\Users\Administrator\AppData\Local\JianyingPro\Apps\8.9.0.13361\ffmpeg.exe')
$ErrorActionPreference = 'Stop'
$previous = $env:FFMPEG
try {
    $env:FFMPEG = $Ffmpeg
    & node (Join-Path $PSScriptRoot 'generate-poetry-audio.js')
    if ($LASTEXITCODE -ne 0) { throw 'Audio generation failed.' }
} finally {
    $env:FFMPEG = $previous
}
