const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

const main = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db("shop");
    const collection = db.collection("products");
    const data = await collection.find({ price: { $gt: 1200 } }).toArray();
    console.log(data);
    // You can start performing database operations here
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
  } finally {
    await client.close();
  }
};
main();
console.log("hello world ");
