use("Practice");

// db.movies.insertOne({
//    "movie_id": "1",
//    "title": "Inception",
//    "genre": "Sci-Fi",
//    "release_year": 2010,
//    "duration": 148,
//    "ratings": 4.8,
//    "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
// });

// db.users.insertMany([
//   {
//     user_id: "1",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     date_of_birth: ISODate("1985-04-23"),
//     loyalty_points: 120,
//   },
//   {
//     user_id: "2",
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     date_of_birth: ISODate("1990-07-12"),
//     loyalty_points: 50,
//   },
// ]);


// db.movies.find({ "genre": "Action" });

// db.theaters.find({ "location.city": "New York" });

// db.theaters.updateOne(
//    { "theater_id": "1" },
//    { $set: { "seating_capacity": 300 } }
// );

// db.movies.deleteOne({ "title": "Inception" });

// db.bookings.insertOne({
//    "booking_id": "1",
//    "user_id": "1",
//    "movie_id": "1",
//    "theater_id": "1",
//    "seats_booked": 2,
//    "total_price": 30,
//    "booking_date": ISODate("2023-09-10")
// });

db.users.find({ "date_of_birth": { $gt: ISODate("1990-01-01") } });