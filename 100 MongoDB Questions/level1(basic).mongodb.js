show("dbs");

use("test");
show('collections')

show('collections')
db.users.find()

db.users.find({ city: "Delhi" });

// Q.2

db.users.find({ age: { $gt: 25 } });

//Q.3

db.users.find({ age: { $lte: 30 } });

// Q.4

db.users.find({ city: { $ne: "Mumbai" } });

//Q.5

db.users.find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 30 } }] });

//Q.6

db.users.find({}, { email: 1, name: 1 });

//Q.7

db.users.find({ name: { $regex: "^R" } });

//Q.8

db.users.find({ email: { $regex: "example" } });

//Q.9

db.users.find({ city: { $exists: true } });

//Q.10

db.users.find({ phone: { $exists: false } });

// Q.11

db.users.find().sort({ age: 1 });

//Q.12

db.users.find().sort({ age: -1 });

//Q.13

db.users.find().limit(5);

// Q.14

const nextFive = db.users.find().skip(10).limit(5);

// console.log(nextFive)

//Q.15

db.users.find({ age: { $in: [20, 25, 30] } });

//Q.16

db.users.find({ age: { $nin: [20, 25, 30] } });

//Q.17

db.users.find().count();

//Q.18

db.users.find({ name: "Ishani Gupta", city: "Mumbai" });

db.users.find({ $and: [{ name: "Ishani Gupta" }, { city: "Mumbai" }] });

//Q.19

db.users.find({ city: { $in: ["Delhi", "Mumbai"] } });
db.users.find({ $or: [{ city: "Delhi" }, { city: "Mumbai" }] });

//Q.20

db.users.find({ age: { $lt: 30 } });

//Q.21

db.users.find({ name: { $regex: "a$" } });

// Q.22

db.users.find({ email: { $regex: "yahoo.com$" } });

//Q.23

db.users.find({ age: { $type: "int" } });

//Q.24

db.users.find({ age: { $mod: [2, 0] } });

//Q.25

db.users.find({ $expr: { $gt: [{ $strLenCP: "$name" }, 10] } });
