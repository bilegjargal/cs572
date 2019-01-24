#1
db.zips.aggregate([
  { $match: { state: "IA" } },
  { $project: { _id: 0, "ZIP CODE": "$_id" } }
]);

#2
db.zips.aggregate([
  { $match: { pop: { $gt: 1000 } } },
  { $project: { _id: 0, "ZIP CODE": "$_id", city: 1, pop: 1 } }
]);

#3
db.zips.aggregate([
  {
    $group: {
      _id: { city: "$city", state: "$state", zip: "$zip" },
      zip: { $sum: 1 }
    }
  },
  { $match: { zip: { $gt: 1 } } },
  { $project: { _id: 1, zip: 1, state: 1 } },
  { $sort: { state: 1, city: -1 } }
]);

#4
db.zips.aggregate([
  {
    $group: {
      _id: { city: "$city", state: "$state" },
      totalPop: { $sum: "$pop" }
    }
  },
  {
    $sort: {
      "_id.state": 1,
      pop: 1
    }
  },
  { $project: { _id: 1, totalPop: 1 } },
  {
    $group: {
      _id: "$_id.state",
      city: {
        $first: "$_id.city"
      },
      totalPop: {
        $first: "$totalPop"
      }
    }
  }
]);