#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from __future__ import annotations
import shutil
from pathlib import Path
from typing import Iterable

try:
    from PIL import Image, ImageOps
except ImportError:
    print("缺少 Pillow 图片库。请先运行：")
    print("python3 -m pip install pillow")
    raise SystemExit(1)

ROOT = Path(__file__).resolve().parents[1]
ASSETS_DIR = ROOT / "assets"
BACKUP_DIR = ROOT / "_original_large_images"
TARGET_MB = 3
TARGET_BYTES = TARGET_MB * 1024 * 1024
SUPPORTED_EXTS = {".jpg", ".jpeg", ".png", ".webp"}

def iter_images() -> Iterable[Path]:
    for path in ASSETS_DIR.rglob("*"):
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTS:
            yield path

def file_size(path: Path) -> int:
    return path.stat().st_size

def mb(size: int) -> float:
    return size / 1024 / 1024

def backup_original(path: Path) -> None:
    relative = path.relative_to(ROOT)
    backup_path = BACKUP_DIR / relative
    if not backup_path.exists():
        backup_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, backup_path)

def resize_image(img: Image.Image, scale: float) -> Image.Image:
    w, h = img.size
    return img.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)

def save_jpeg(img: Image.Image, out: Path, quality: int) -> None:
    if img.mode not in ("RGB", "L"):
        img = img.convert("RGB")
    img.save(out, format="JPEG", quality=quality, optimize=True, progressive=True, subsampling="4:2:0")

def save_webp(img: Image.Image, out: Path, quality: int) -> None:
    img.save(out, format="WEBP", quality=quality, method=6)

def save_png(img: Image.Image, out: Path) -> None:
    img.save(out, format="PNG", optimize=True, compress_level=9)

def compress_jpeg_or_webp(path: Path, img: Image.Image, fmt: str) -> bool:
    temp = path.with_suffix(path.suffix + ".tmp")
    best_data = None
    low, high = 35, 92
    while low <= high:
        q = (low + high) // 2
        if fmt == "JPEG":
            save_jpeg(img, temp, q)
        else:
            save_webp(img, temp, q)
        if file_size(temp) <= TARGET_BYTES:
            best_data = temp.read_bytes()
            low = q + 1
        else:
            high = q - 1
    if best_data is not None:
        path.write_bytes(best_data)
        temp.unlink(missing_ok=True)
        return True

    working = img
    for _ in range(18):
        working = resize_image(working, 0.92)
        for q in (82, 76, 70, 64, 58, 52, 46, 40, 35):
            if fmt == "JPEG":
                save_jpeg(working, temp, q)
            else:
                save_webp(working, temp, q)
            if file_size(temp) <= TARGET_BYTES:
                shutil.move(str(temp), str(path))
                return True
    temp.unlink(missing_ok=True)
    return file_size(path) <= TARGET_BYTES

def compress_png(path: Path, img: Image.Image) -> bool:
    temp = path.with_suffix(path.suffix + ".tmp")
    save_png(img, temp)
    if file_size(temp) <= TARGET_BYTES:
        shutil.move(str(temp), str(path))
        return True
    has_alpha = img.mode in ("RGBA", "LA") or ("transparency" in img.info)
    if not has_alpha:
        try:
            quantized = img.convert("RGB").quantize(colors=256, method=Image.MEDIANCUT)
            save_png(quantized, temp)
            if file_size(temp) <= TARGET_BYTES:
                shutil.move(str(temp), str(path))
                return True
        except Exception:
            pass
    working = img
    for _ in range(22):
        working = resize_image(working, 0.92)
        save_png(working, temp)
        if file_size(temp) <= TARGET_BYTES:
            shutil.move(str(temp), str(path))
            return True
    temp.unlink(missing_ok=True)
    return file_size(path) <= TARGET_BYTES

def compress_one(path: Path) -> None:
    original_size = file_size(path)
    if original_size <= TARGET_BYTES:
        print(f"跳过：{path.relative_to(ROOT)}  {mb(original_size):.2f}MB")
        return
    print(f"压缩：{path.relative_to(ROOT)}  原始 {mb(original_size):.2f}MB")
    backup_original(path)
    try:
        img = Image.open(path)
        img = ImageOps.exif_transpose(img)
    except Exception as exc:
        print(f"  失败：无法打开图片：{exc}")
        return
    suffix = path.suffix.lower()
    ok = False
    if suffix in (".jpg", ".jpeg"):
        ok = compress_jpeg_or_webp(path, img, "JPEG")
    elif suffix == ".webp":
        ok = compress_jpeg_or_webp(path, img, "WEBP")
    elif suffix == ".png":
        ok = compress_png(path, img)
    new_size = file_size(path)
    if ok and new_size <= TARGET_BYTES:
        print(f"  完成：{mb(original_size):.2f}MB → {mb(new_size):.2f}MB")
    else:
        print(f"  提醒：已尽量压缩，但仍为 {mb(new_size):.2f}MB。建议手动裁小尺寸或改成 JPG/WebP。")

def main() -> None:
    if not ASSETS_DIR.exists():
        print("没有找到 assets 文件夹。请在项目根目录运行。")
        raise SystemExit(1)
    print(f"项目目录：{ROOT}")
    print(f"扫描目录：{ASSETS_DIR}")
    print(f"压缩目标：单张图片 ≤ {TARGET_MB}MB")
    print("-" * 56)
    count = 0
    large_count = 0
    for path in iter_images():
        count += 1
        if file_size(path) > TARGET_BYTES:
            large_count += 1
        compress_one(path)
    print("-" * 56)
    print(f"扫描图片：{count} 张")
    print(f"超过 {TARGET_MB}MB：{large_count} 张")
    print(f"原图备份目录：{BACKUP_DIR.relative_to(ROOT)}")
    print("完成。")

if __name__ == "__main__":
    main()
