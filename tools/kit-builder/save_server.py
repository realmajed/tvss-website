"""Serve the builder page and save GLB files POSTed to /save?name=tier1.glb into ./out."""
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse, parse_qs
import os, re

HERE = Path(__file__).parent
OUT = HERE / "out"
OUT.mkdir(exist_ok=True)
os.chdir(HERE)


class H(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_POST(self):
        q = parse_qs(urlparse(self.path).query)
        name = q.get("name", [""])[0]
        if not re.fullmatch(r"[\w-]+\.(glb|png|json)", name):
            self.send_response(400); self.end_headers(); return
        n = int(self.headers.get("Content-Length", 0))
        (OUT / name).write_bytes(self.rfile.read(n))
        self.send_response(200); self.end_headers(); self.wfile.write(b"saved")


HTTPServer(("127.0.0.1", 8772), H).serve_forever()
