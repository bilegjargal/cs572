const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const grades = require("./grade");
const { check, validationResult } = require("express-validator/check");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("env", "development");
app.enable("case sensitive routing");
app.set("x-powered-by", false);

app.get("/grades", function(req, res) {
  res.send(grades.getAll());
  next();
});

app.post(
  "/add",
  [
    check("id").isNumeric(),
    check("name").exists(),
    check("course").exists(),
    check("grade").isNumeric()
  ],
  function(req, res) {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    grades.addGrade({
      id: req.body.id,
      name: req.body.name,
      course: req.body.course,
      grade: req.body.grade
    });
    console.log(req.body);
  }
);

app.post(
  "/add",
  [
    check("id").isNumeric(),
    check("name").exists(),
    check("course").exists(),
    check("grade").isNumeric()
  ],
  function(req, res) {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    grades.addGrade({
      id: req.body.id,
      name: req.body.name,
      course: req.body.course,
      grade: req.body.grade
    });
    console.log(req.body);
  }
);

app.delete("/remove/:id", function(req, res) {
  console.log(req.params.id);
  grades.removeGrade(req.params.id);
  next();
});

app.listen(4000, () => console.log("Listening on 4000"));
