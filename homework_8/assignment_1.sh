mongo
use mwa
# 1
db.restaurant.find().toArray();

# 2
db.restaurant.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});

# 3
db.restaurant.find({}, {_id:0, restaurant_id: 1, name: 1, district: 1, cuisine: 1});

# 4
db.restaurant.find({}, {_id:0, restaurant_id: 1, name: 1, district: 1, zipcode: 1});

# 5
db.restaurant.find({district: "Bronx"}, {});

# 6
db.restaurant.find({district: "Bronx"}, {_id:0, restaurant_id: 1, name: 1, district: 1, zipcode: 1}).limit(5).sort({name: 1});

# 7
db.restaurant.find({district: "Bronx"}, {_id:0, restaurant_id: 1, name: 1, district: 1, zipcode: 1}).skip(5).limit(5).sort({name: 1});

# 8
db.restaurant.find({"address.coord.0":{$lt: -95.754168}}, {_id:0, name: 1})

# 9
db.restaurant.find({$and:[{"grades": {$elemMatch: {"score": {$gt: 70}}}}, {"cuisine": {$ne:"American "}}, {"address.coord.0": {$lt: -65.754168}}]},{_id:0})

# 10
db.restaurant.find({name: /^Wil/}, {_id:0, name: 1, district: 1, cuisine: 1, restaurant_id: 1})

# 11
db.restaurant.find({name: /ces$/}, {_id:0, name: 1, district: 1, cuisine: 1, restaurant_id: 1})

# 12
db.restaurant.find({name: /Reg/}, {_id:0, name: 1, district: 1, cuisine: 1, restaurant_id: 1})

# 13
db.restaurant.find({$and: [{district: "Bronx"}, {$or:[{cuisine: "American "}, {cuisine: "Chinese"}]}]}, {_id:0, name: 1, district: 1, cuisine: 1, restaurant_id: 1})

# 14
db.restaurant.find({$or: [{district: "Bronx"}, {district: "Brooklyn"}, {district: "Staten Island"}]}, {_id:0, name: 1, district: 1, cuisine: 1, restaurant_id: 1})

# 15
db.restaurant.find({$or: [{district: "Bronx"}, {district: "Brooklyn"}, {district: "Staten Island"}]}, {_id:0, name: 1, district: 1, cuisine: 1, restaurant_id: 1})
