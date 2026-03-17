// show ("dbs")
use("shop");
// show('collections')

// db.products.find({ price: { $gt: 12.0 } }, { title: 1, category: 1, price: 1 });
db.products.find({ price: { $lt: 12.0 } }, { title: 1, category: 1, price: 1 });
