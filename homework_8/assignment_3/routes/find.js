const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const collection = req.db.collection("homework8");
  collection.createIndex({ location: "2d" });
  collection
    .find(
      { location: { $near: [req.params.long, req.params.lat] } },
      { _id: 0, name: 1, category: 1, location: 1 }
    )
    .limit(3);
  res.end();
});

module.exports = router;
