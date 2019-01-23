const MongoClient = require("mongodb").MongoClient;
const mongoConnectionString = "mongodb://127.0.0.1:27017/";

var db = undefined;

module.exports = function() {
  return function(req, res, next) {
    if (db === undefined) {
      const client = new MongoClient(mongoConnectionString, {
        useNewUrlParser: true
      });
      client.connect(err => {
        if (err) throw err;
        db = client.db("mwa");
        req.db = db;
        next();
        console.log("Connection created to mongodb");
      });
    } else {
      console.log("Using existing connection");
      req.db = db;
      next();
    }
  };
};
