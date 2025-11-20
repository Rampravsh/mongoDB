const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1/shop";

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
});

const Item = mongoose.model("Item", itemSchema);

async function createitem() {
  const item = new Item({
    name: "Laptop",
    price: 1200,
    inStock: true,
  });

  const result = await item.save();
  console.log("item Created:", result);
}

async function getitems() {
  const items = await Item.find();
  console.log("All items:", items);
}

async function updateitem(id) {
  const item = await Item.findById(id);
  if (!item) {
    console.log("item not found");
    return;
  }

  item.set({
    price: 1300,
    inStock: false,
  });

  const result = await item.save();
  console.log("item Updated:", result);
}

async function deleteitem(id) {
  const result = await Item.deleteOne({ _id: id });
  console.log("item Deleted:", result);
}

async function run() {
  await createitem();
  const items = await Item.find();
  if (items.length > 0) {
    await getitems();
    await updateitem(items[0]._id);
    await deleteitem(items[0]._id);
  }
  mongoose.connection.close();
}

run();
