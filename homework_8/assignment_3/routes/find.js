const express = require("express");
const router = express.Router();
const url_obj = require("url");

router.get("/", (req, res) => {
  const collection = req.db.collection("homework8");
  const params = url_obj.parse(req.url, true);
  // collection.createIndex({ "2dsphere": "2d" });

  collection
    .find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [
              parseFloat(params.query.long),
              parseFloat(params.query.lat)
            ]
          },
          $maxDistance: 2000
        }
      }
    })
    .limit(3)
    .toArray(function(err, document) {
      console.log(document);
      if (err) throw err;
      res.status(200).json(document);
    });
});

module.exports = router;
