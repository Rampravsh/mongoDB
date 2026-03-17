use("shop");

// show ("collections")

// db.products.find(
//   {
//     $and: [{ category: "beauty" }, { price: { $gt: 12 } }],
//   },
//   { title: 1, category: 1, price: 1 },
// );


db.products.find(
  {
    $or: [{ category: "beauty" }, { price: { $gt: 12 } }],
  },
  { title: 1, category: 1, price: 1 },
);
