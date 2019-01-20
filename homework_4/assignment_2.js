const http = require("http");
const cluster = require("cluster");
const { fork } = require("child_process");

http
  .createServer((req, res) => {})
  .listen(8000, () => console.log("listening 8000"));
