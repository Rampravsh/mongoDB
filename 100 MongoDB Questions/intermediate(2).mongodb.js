show("dbs");

use("test");

// show("collections");

// db.orders.find();

//Q.41

// db.orders.find({ user: "Rohan Verma" });

//Q.42

// db.orders.find({ totalAmount: { $gt: 1000 } });

// Q.43

// db.orders.find({ orderDate: { $gt: new Date("10-11-2023") } });

// Q.44

// db.orders.find({ status: "Delivered" });

// Q.45

// db.orders.find({ status: { $ne: "Cancelled" } });

//Q.46

// db.orders.updateMany({}, { $mul: {price:1.1} });

// Q.47

// show('collections')

// db.products.updateMany({},)

// db.products.find()

// db.orders.find().count()

// db.products.updateMany({},{$inc:{stock:50}})


// Q.48

// db.products.updateMany({},{$rename:{"price":"prductPrice"}})

// Q.49

// db.products.updateMany({},{$unset:{"discount":""}})

// db.products.find()


// Q.50

// db.products.updateMany({},{$set:{'featured':true}})

//Q.51

// db.products.deleteMany({stock:215})

//Q.52

db.users.find()


// db.users.updateMany({},{
//   $set:{
//     orders:[],
//     wishlist:[],
//     cart:[]
//   }
// })

// db.users.updateMany(
//   {},
//   {
//     $push:{orders:{id:101}}
//   }
// )

// db.users.updateMany({name:"Aarav Sharma"},{$pull:{orders:{id:101}}})


// db.users.findOne({orders:{$size:1}})