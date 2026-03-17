const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

async function importProducts() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const db = client.db("shop");
    const collection = db.collection("products");

    // Read the products.json file
    const filePath = path.join(__dirname, "..", "Operators", "products.json");
    const data = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(data);

    // Insert the products
    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} products inserted successfully`);
  } catch (e) {
    console.error("Error:", e);
  } finally {
    await client.close();
  }
}

importProducts();
