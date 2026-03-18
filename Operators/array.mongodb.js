use("test");

// db.students.insertMany(
//     [
//         { name: "Alice", scores: [85, 90, 92] },
//         { name: "Bob", scores: [78, 82, 88] },
//         { name: "Charlie", scores: [90, 95, 98] },
//         { name: "David", scores: [70, 75, 80] },
//         { name: "Eve", scores: [88, 92, 94] },
//         { name: "Frank", scores: [80, 85, 90] },
//         { name: "Grace", scores: [92, 96, 98] },
//         { name: "Heidi", scores: [75, 80, 85] },
//         { name: "Ivan", scores: [85, 90, 95] },
//         { name: "Judy", scores: [78, 82, 88] }
//     ]
// )

// show ("collections")

// db.students.find({
//     scores:{$all:[90,95]}
// })

// db.students.updateMany(
//   { name: { $regex: /e/i } },
//   { $set: { skills: ["JavaScript", "MongoDB", "Node.js"] } },
// );

// db.students.find({
//     skills:{$size:3}
// })

// db.students.find({
//     skills:{$elemMatch:{$regex:/^J/}}
// })

// db.products.insertMany([
//   {
//     name: "Laptop",
//     reviews: [
//       { user: "Alice", rating: 5, comment: "Great laptop!" },
//       { user: "David", rating: 4, comment: "Good value for money." },
//       { user: "Charlie", rating: 3, comment: "Average performance." },
//     ],
//   },
//   {
//     name: "Smartphone",
//     reviews: [
//       { user: "David", rating: 5, comment: "Excellent phone!" },
//       { user: "Eve", rating: 4, comment: "Good camera quality." },
//       { user: "Frank", rating: 3, comment: "Decent battery life." },
//     ],
//   },
// ]);

// db.products.find({
//     'reviews.user': 'David',
//     'reviews.rating':5
// })

db.products.find({
  reviews: {
    $elemMatch: {
      user: "David",
      rating: 5
    },
  },
});
