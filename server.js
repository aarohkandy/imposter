const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const preferredPort = Number(process.env.PORT) || 3000;
const publicDir = path.join(__dirname, "public");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8"
};

function sendFile(filePath, response) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Server error.");
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store, max-age=0"
    });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  const rawPath = request.url.split("?")[0];
  const requestedPath = rawPath === "/" ? "/index.html" : rawPath;
  const normalizedPath = path.normalize(requestedPath).replace(/^(\.\.[\\/])+/, "");
  const filePath = path.join(publicDir, normalizedPath);

  if (!filePath.startsWith(publicDir)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden.");
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(filePath, response);
      return;
    }

    if (!error && stats.isDirectory()) {
      sendFile(path.join(filePath, "index.html"), response);
      return;
    }

    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found.");
  });
});

let currentPort = preferredPort;

function listenOnPort(port) {
  currentPort = port;
  server.listen(port, () => {
    const activePort = server.address().port;
    console.log(`Imposter Local is running at http://localhost:${activePort}`);

    if (process.env.OPEN_BROWSER === "1") {
      exec(`start "" http://localhost:${activePort}`, { shell: "cmd.exe" }, () => {});
    }
  });
}

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    const nextPort = currentPort + 1;
    console.log(`Port ${currentPort} is busy, trying http://localhost:${nextPort} instead...`);
    listenOnPort(nextPort);
    return;
  }

  throw error;
});

listenOnPort(preferredPort);
