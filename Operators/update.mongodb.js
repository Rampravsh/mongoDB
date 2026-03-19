show("dbs");

use("shop");

// show("collections");

// db.products.updateMany(
//   {},
//   {
//     $set: { rating: 5 },
//   },
// );

// db.products.updateMany({},{
//     $unset:{sku:0}
// })

// db.products.updateMany({},{
//     $inc:{price:5}
// })

// db.products.updateMany({},{
//     $mul:{stock:2}
// })

// db.products.updateMany({},{
//     $rena

// db.products.updateMany({},{
//     $rename:{avl:'stock'}
// })

// db.products.updateMany(
//   {},
//   {
//     $min: { stock: 100 },
//   },
// );

// db.products.updateMany(
//   {},
//   {
//     $max: { stock: 90 },
//   },
// );

// db.products.updateMany({}, { $push: { tags: "rpk" } });


// db.products.updateMany({}, { $pull: { tags: "rpk" } });

db.products.find({}, { tags: 1 });
