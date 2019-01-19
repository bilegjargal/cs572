const express = require("express");
const app = express();
const logger = require("morgan");
const grades = require("./grade");

app.set("env", "development");
app.enable("case sensitive routing");
app.set("x-powered-by", false);

app.get("/grades", function(req, res, next) {
  res.send(grades);
});

app.post("/grades", function(req, res, next) {
  res.send(grades);
});

app.listen(4000, () => console.log("Listening on 4000"));
