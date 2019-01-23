const express = require("express");
const app = express();
const dbConnection = require("./dbhelper");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(dbConnection());
app.listen(4000, () => {
  console.log("Listening on 4000");
});

app.use("/insert", require("./routes/insert"));
app.use("/find", require("./routes/find"));
