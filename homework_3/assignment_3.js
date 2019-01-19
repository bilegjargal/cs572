const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer();

const mimeType = {
  ".mkv": "video/x-matroska"
};

server.on("request", function(req, res) {
  const useage = process.memoryUsage();
  res.writeHead(200, { "Content-Type": mimeType[".mkv"] });

  fs.readFile("./demo.mkv", function(err, content) {
    console.log(useage);
  });

  fs.readFileSync("./demo.mkv", function(err, content) {
    console.log(useage);
  });

  process.chdir("./");
  var stream = fs.createReadStream("./demo.mkv", { bufferSize: 64 * 1024 });
  stream.pipe(res);
  res.end();
});

server.listen(4000);
console.log("Server has started");
