const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.set("case sensitive routing", true);
app.set("x-powered-by", false);

const getUsers = async () => {
  try {
    return await axios.get("https://randomuser.me/api/?results=10");
  } catch (error) {
    console.log(error);
  }
};

app.get("/users", function(req, res) {
  getUsers()
    .then(function(response) {
      res.set("Content-Type", "text/html");
      res.send(JSON.stringify(response.data));
      res.end();
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log("Listening 3000");
});
