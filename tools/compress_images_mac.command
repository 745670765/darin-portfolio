#!/bin/zsh
cd "$(dirname "$0")/.."

echo "正在检查 Pillow..."
python3 - <<'PY'
try:
    import PIL
except ImportError:
    raise SystemExit(1)
PY

if [ $? -ne 0 ]; then
  echo "缺少 Pillow，正在安装..."
  python3 -m pip install pillow
fi

echo "开始压缩 assets 文件夹中超过 3MB 的图片..."
python3 tools/compress_images.py

echo ""
echo "处理完成。可以关闭这个窗口。"
read -k 1 "?按任意键退出..."
