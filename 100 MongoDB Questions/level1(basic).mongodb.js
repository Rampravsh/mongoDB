show("dbs");

use("test");
// show('collections')
// db.users.insertMany([
//   {
//     name: "Aarav Sharma",
//     age: 25,
//     city: "Delhi",
//     email: "aarav@example.com",
//     phone: "9876543210",
//     isActive: true,
//   },
//   {
//     name: "Ishani Gupta",
//     age: 22,
//     city: "Mumbai",
//     email: "ishani@example.com",
//     phone: "9876543211",
//     isActive: false,
//   },
//   {
//     name: "Rohan Verma",
//     age: 30,
//     city: "Bangalore",
//     email: "rohan@example.com",
//     phone: "9876543212",
//     isActive: true,
//   },
//   {
//     name: "Sanya Malhotra",
//     age: 27,
//     city: "Pune",
//     email: "sanya@example.com",
//     phone: "9876543213",
//     isActive: true,
//   },
//   {
//     name: "Kabir Singh",
//     age: 24,
//     city: "Hyderabad",
//     email: "kabir@example.com",
//     phone: "9876543214",
//     isActive: false,
//   },
//   {
//     name: "Ananya Pandey",
//     age: 21,
//     city: "Chennai",
//     email: "ananya@example.com",
//     phone: "9876543215",
//     isActive: true,
//   },
//   {
//     name: "Vikram Rathore",
//     age: 35,
//     city: "Jaipur",
//     email: "vikram@example.com",
//     phone: "9876543216",
//     isActive: true,
//   },
//   {
//     name: "Meera Iyer",
//     age: 28,
//     city: "Kolkata",
//     email: "meera@example.com",
//     phone: "9876543217",
//     isActive: false,
//   },
//   {
//     name: "Aditya Roy",
//     age: 26,
//     city: "Lucknow",
//     email: "aditya@example.com",
//     phone: "9876543218",
//     isActive: true,
//   },
//   {
//     name: "Tara Sutaria",
//     age: 23,
//     city: "Ahmedabad",
//     email: "tara@example.com",
//     phone: "9876543219",
//     isActive: true,
//   },
//   {
//     name: "Arjun Kapoor",
//     age: 29,
//     city: "Chandigarh",
//     email: "arjun@example.com",
//     phone: "9876543220",
//     isActive: false,
//   },
//   {
//     name: "Kiara Advani",
//     age: 25,
//     city: "Indore",
//     email: "kiara@example.com",
//     phone: "9876543221",
//     isActive: true,
//   },
//   {
//     name: "Siddharth Jain",
//     age: 32,
//     city: "Bhopal",
//     email: "sid@example.com",
//     phone: "9876543222",
//     isActive: true,
//   },
//   {
//     name: "Pooja Hegde",
//     age: 27,
//     city: "Surat",
//     email: "pooja@example.com",
//     phone: "9876543223",
//     isActive: false,
//   },
//   {
//     name: "Varun Dhawan",
//     age: 31,
//     city: "Nagpur",
//     email: "varun@example.com",
//     phone: "9876543224",
//     isActive: true,
//   },
//   {
//     name: "Kriti Sanon",
//     age: 28,
//     city: "Patna",
//     email: "kriti@example.com",
//     phone: "9876543225",
//     isActive: true,
//   },
//   {
//     name: "Ayushmann Khurrana",
//     age: 34,
//     city: "Amritsar",
//     email: "ayush@example.com",
//     phone: "9876543226",
//     isActive: false,
//   },
//   {
//     name: "Shraddha Kapoor",
//     age: 26,
//     city: "Kochi",
//     email: "shraddha@example.com",
//     phone: "9876543227",
//     isActive: true,
//   },
//   {
//     name: "Ranbir Kapoor",
//     age: 33,
//     city: "Shimla",
//     email: "ranbir@example.com",
//     phone: "9876543228",
//     isActive: true,
//   },
//   {
//     name: "Alia Bhatt",
//     age: 24,
//     city: "Manali",
//     email: "alia@example.com",
//     phone: "9876543229",
//     isActive: false,
//   },
// ]);

// show('collections')
// db.users.find()

db.users.find({ city: "Delhi" });

// Q.2

db.users.find({ age: { $gt: 25 } });

//Q.3

db.users.find({ age: { $lte: 30 } });

// Q.4

db.users.find({ city: { $ne: "Mumbai" } });

//Q.5

db.users.find({$and:[{age:{$gt:20}},{age:{$lt:30}}]})

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
