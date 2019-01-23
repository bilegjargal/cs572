const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const collection = req.db.collection("homework8");

  collection.insertOne(req.body, function(err, result) {
    if (err) throw err;
    console.log(`${req.body} inserted successfully`);
    res.write(`${req.body} inserted successfully`);
    res.end();
  });
});

module.exports = router;
