const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const collection = req.db.collection("restaurant");
});

module.exports = router;
