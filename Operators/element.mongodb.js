show("dbs");
use("shop");
show("collections");
// db.orders.find({
//   items: { $elemMatch: { name: "laptop", price: { $gt: 1000 } } },
// });

db.products.find({stock:{$type:'int'}},{title:1,stock:1})