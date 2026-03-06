// show('dbs')

use("instagramClone");
// db.createCollection('users')
// db.createCollection('posts')

// show ('collections')

// db.users.insertOne({
//     username:'rampravesh',
//     followers:120,
//     city:"patna"
// })

// db.posts.insertOne({
//     username:'rampravesh',
//     caption:"Gym time",
//     likes:10
// })

db.posts.updateOne(
  {
    username: "rampravesh",
  },
  { $set: { caption: "Study time" } },
);
