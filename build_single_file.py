"""Rebuild tvss-website-single-file.html from the website/ folder.

The single file is website/index.html with css/styles.css and js/main.js inlined,
every img/*.webp turned into a base64 data URI, and models/kits.js appended last.
Run it after editing anything in website/:  python build_single_file.py
"""
import base64
import re
from pathlib import Path

ROOT = Path(__file__).parent
SITE = ROOT / "website"
OUT = ROOT / "tvss-website-single-file.html"

HEADER = """<!--
  Tiered Visitor Safety System · Group 2 ("The Group") · UTS 31265 · EWB Challenge 2026
  Single-file build: the whole website in one file. Pages are <section class="page" data-route="..."> blocks;
  the URL hash (#home, #design ...) picks the page. Text is plain HTML, so edit it with find (Ctrl+F).
  Images are embedded as data URIs; the 3D models are in the last <script> at the very end.
  Search for data-todo to find every item the team still has to complete.
-->
"""


def data_uri(name):
    raw = (SITE / "img" / name).read_bytes()
    return "data:image/webp;base64," + base64.b64encode(raw).decode("ascii")


def main():
    html = (SITE / "index.html").read_text(encoding="utf-8")
    css = (SITE / "css" / "styles.css").read_text(encoding="utf-8")
    js = (SITE / "js" / "main.js").read_text(encoding="utf-8")
    kits = (SITE / "models" / "kits.js").read_text(encoding="utf-8")

    css = re.sub(r"url\('\.\./img/([\w-]+\.webp)'\)", lambda m: "url('" + data_uri(m.group(1)) + "')", css)
    html = re.sub(r'src="img/([\w-]+\.webp)"', lambda m: 'src="' + data_uri(m.group(1)) + '"', html)

    link = '<link rel="stylesheet" href="css/styles.css">'
    scripts = '<script src="models/kits.js"></script>\n<script src="js/main.js"></script>'
    assert html.count(link) == 1 and html.count(scripts) == 1, "index.html layout changed; update this script"
    html = html.replace(link, "<style>\n" + css.strip() + "\n</style>")
    # main.js waits for DOMContentLoaded, so the models can come after it, at the very end
    html = html.replace(scripts, "<script>\n" + js.strip() + "\n</script>\n<script>\n" + kits.strip() + "\n</script>")
    html = html.replace("<!doctype html>\n", "<!doctype html>\n" + HEADER, 1)

    leftover = re.findall(r'(?:src|href)="(?:img|css|js|models)/[^"]+"', html)
    assert not leftover, leftover
    OUT.write_text(html, encoding="utf-8", newline="\n")
    print(f"wrote {OUT.name}: {OUT.stat().st_size / 1e6:.2f} MB")


if __name__ == "__main__":
    main()
