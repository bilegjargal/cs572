const express = require("express");
const dbConnection = require("./dbhelper");

const app = express();
const port = 4000;

app.use(dbConnection());
app.use("/secret", require("./secret"));

app.listen(port, () => {
  console.log(`Listening ${port}`);
});
