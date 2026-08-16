const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 5500;
const root = __dirname;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
};

http.createServer((req, res) => {
  let filePath = path.join(root, req.url === "/" ? "/index.html" : req.url);
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
    res.end(data);
  });
}).listen(port, () => console.log(`Server running at http://localhost:${port}`));
