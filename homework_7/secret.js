const express = require("express");
const crypto = require("crypto");

const router = express.Router();

router.get("/", (req, res) => {
  const collection = req.db.collection("homework7");

  collection.findOne({}, function(err, doc) {
    console.log(`error is ${err}`);
    console.log(`doc is ${doc}`);

    if (err) throw err;
    const decipher = crypto.createDecipher("aes256", "asaadsaad");
    const decrypted =
      decipher.update(doc.message, "hex", "utf8") + decipher.final("utf8");
    res.write(decrypted);
    res.end();
  });
});

module.exports = router;
