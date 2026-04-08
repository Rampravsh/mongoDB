// Q.26

use("test");

// db.products.insertMany([
//   {
//     name: "Laptop Pro",
//     price: 1200,
//     category: "Electronics",
//     stock: 15,
//     discount: 10,
//     tags: ["tech", "work"],
//   },
//   {
//     name: "Wireless Mouse",
//     price: 25,
//     category: "Accessories",
//     stock: 100,
//     discount: 5,
//     tags: ["office", "pc"],
//   },
//   {
//     name: "Mechanical Keyboard",
//     price: 80,
//     category: "Accessories",
//     stock: 45,
//     discount: 15,
//     tags: ["gaming", "pc"],
//   },
//   {
//     name: "Gaming Monitor",
//     price: 300,
//     category: "Electronics",
//     stock: 20,
//     discount: 12,
//     tags: ["gaming", "display"],
//   },
//   {
//     name: "USB-C Cable",
//     price: 15,
//     category: "Accessories",
//     stock: 200,
//     discount: 0,
//     tags: ["cable", "tech"],
//   },
//   {
//     name: "Smartphone X",
//     price: 800,
//     category: "Electronics",
//     stock: 30,
//     discount: 5,
//     tags: ["mobile", "tech"],
//   },
//   {
//     name: "Bluetooth Speaker",
//     price: 50,
//     category: "Electronics",
//     stock: 60,
//     discount: 20,
//     tags: ["audio", "music"],
//   },
//   {
//     name: "Noise Cancelling Headphones",
//     price: 250,
//     category: "Electronics",
//     stock: 25,
//     discount: 10,
//     tags: ["audio", "travel"],
//   },
//   {
//     name: "External Hard Drive",
//     price: 100,
//     category: "Electronics",
//     stock: 40,
//     discount: 8,
//     tags: ["storage", "backup"],
//   },
//   {
//     name: "Webcam 4K",
//     price: 120,
//     category: "Electronics",
//     stock: 18,
//     discount: 10,
//     tags: ["video", "work"],
//   },
//   {
//     name: "Desk Lamp",
//     price: 35,
//     category: "Home",
//     stock: 55,
//     discount: 5,
//     tags: ["furniture", "office"],
//   },
//   {
//     name: "Office Chair",
//     price: 200,
//     category: "Home",
//     stock: 10,
//     discount: 15,
//     tags: ["furniture", "work"],
//   },
//   {
//     name: "Water Bottle",
//     price: 20,
//     category: "Lifestyle",
//     stock: 150,
//     discount: 0,
//     tags: ["gym", "health"],
//   },
//   {
//     name: "Yoga Mat",
//     price: 40,
//     category: "Lifestyle",
//     stock: 80,
//     discount: 10,
//     tags: ["fitness", "yoga"],
//   },
//   {
//     name: "Dumbbells 5kg",
//     price: 30,
//     category: "Lifestyle",
//     stock: 40,
//     discount: 5,
//     tags: ["fitness", "gym"],
//   },
//   {
//     name: "Coffee Maker",
//     price: 90,
//     category: "Home",
//     stock: 22,
//     discount: 12,
//     tags: ["kitchen", "coffee"],
//   },
//   {
//     name: "Electric Kettle",
//     price: 45,
//     category: "Home",
//     stock: 35,
//     discount: 8,
//     tags: ["kitchen", "home"],
//   },
//   {
//     name: "Air Purifier",
//     price: 180,
//     category: "Home",
//     stock: 12,
//     discount: 20,
//     tags: ["health", "home"],
//   },
//   {
//     name: "Backpack",
//     price: 60,
//     category: "Lifestyle",
//     stock: 70,
//     discount: 10,
//     tags: ["travel", "bag"],
//   },
//   {
//     name: "Running Shoes",
//     price: 110,
//     category: "Lifestyle",
//     stock: 50,
//     discount: 15,
//     tags: ["sports", "shoes"],
//   },
//   {
//     name: "Smart Watch",
//     price: 220,
//     category: "Electronics",
//     stock: 35,
//     discount: 10,
//     tags: ["wearable", "tech"],
//   },
//   {
//     name: "Tablet Air",
//     price: 500,
//     category: "Electronics",
//     stock: 20,
//     discount: 5,
//     tags: ["mobile", "tablet"],
//   },
//   {
//     name: "Power Bank",
//     price: 40,
//     category: "Electronics",
//     stock: 120,
//     discount: 10,
//     tags: ["battery", "travel"],
//   },
//   {
//     name: "HDMI Adapter",
//     price: 12,
//     category: "Accessories",
//     stock: 300,
//     discount: 0,
//     tags: ["cable", "video"],
//   },
//   {
//     name: "Laptop Stand",
//     price: 45,
//     category: "Accessories",
//     stock: 65,
//     discount: 5,
//     tags: ["office", "ergonomics"],
//   },
//   {
//     name: "Electric Toothbrush",
//     price: 75,
//     category: "Lifestyle",
//     stock: 40,
//     discount: 10,
//     tags: ["health", "personal"],
//   },
//   {
//     name: "Hair Dryer",
//     price: 55,
//     category: "Lifestyle",
//     stock: 30,
//     discount: 12,
//     tags: ["beauty", "personal"],
//   },
//   {
//     name: "Toaster",
//     price: 35,
//     category: "Home",
//     stock: 25,
//     discount: 5,
//     tags: ["kitchen", "home"],
//   },
//   {
//     name: "Blender",
//     price: 120,
//     category: "Home",
//     stock: 15,
//     discount: 15,
//     tags: ["kitchen", "health"],
//   },
//   {
//     name: "Microwave",
//     price: 150,
//     category: "Home",
//     stock: 8,
//     discount: 10,
//     tags: ["kitchen", "appliances"],
//   },
//   {
//     name: "Vacuum Cleaner",
//     price: 210,
//     category: "Home",
//     stock: 14,
//     discount: 18,
//     tags: ["cleaning", "home"],
//   },
//   {
//     name: "Iron",
//     price: 40,
//     category: "Home",
//     stock: 45,
//     discount: 5,
//     tags: ["laundry", "home"],
//   },
//   {
//     name: "Wall Clock",
//     price: 25,
//     category: "Home",
//     stock: 90,
//     discount: 0,
//     tags: ["decor", "home"],
//   },
//   {
//     name: "Picture Frame",
//     price: 15,
//     category: "Home",
//     stock: 110,
//     discount: 20,
//     tags: ["decor", "gift"],
//   },
//   {
//     name: "Scented Candle",
//     price: 12,
//     category: "Home",
//     stock: 200,
//     discount: 0,
//     tags: ["decor", "fragrance"],
//   },
//   {
//     name: "Notebook",
//     price: 8,
//     category: "Stationery",
//     stock: 500,
//     discount: 0,
//     tags: ["office", "writing"],
//   },
//   {
//     name: "Gel Pens (Set)",
//     price: 10,
//     category: "Stationery",
//     stock: 300,
//     discount: 5,
//     tags: ["office", "writing"],
//   },
//   {
//     name: "Stapler",
//     price: 12,
//     category: "Stationery",
//     stock: 150,
//     discount: 0,
//     tags: ["office", "tools"],
//   },
//   {
//     name: "Desk Organizer",
//     price: 22,
//     category: "Stationery",
//     stock: 85,
//     discount: 10,
//     tags: ["office", "storage"],
//   },
//   {
//     name: "Whiteboard",
//     price: 50,
//     category: "Stationery",
//     stock: 20,
//     discount: 15,
//     tags: ["office", "education"],
//   },
//   {
//     name: "Calculator",
//     price: 18,
//     category: "Stationery",
//     stock: 100,
//     discount: 5,
//     tags: ["office", "math"],
//   },
//   {
//     name: "Umbrella",
//     price: 25,
//     category: "Lifestyle",
//     stock: 60,
//     discount: 0,
//     tags: ["travel", "rain"],
//   },
//   {
//     name: "Sunglasses",
//     price: 130,
//     category: "Lifestyle",
//     stock: 40,
//     discount: 20,
//     tags: ["fashion", "summer"],
//   },
//   {
//     name: "Wallet",
//     price: 45,
//     category: "Lifestyle",
//     stock: 55,
//     discount: 10,
//     tags: ["fashion", "leather"],
//   },
//   {
//     name: "Belt",
//     price: 30,
//     category: "Lifestyle",
//     stock: 75,
//     discount: 5,
//     tags: ["fashion", "leather"],
//   },
//   {
//     name: "T-shirt",
//     price: 20,
//     category: "Clothing",
//     stock: 200,
//     discount: 15,
//     tags: ["fashion", "casual"],
//   },
//   {
//     name: "Hoodie",
//     price: 50,
//     category: "Clothing",
//     stock: 90,
//     discount: 10,
//     tags: ["fashion", "winter"],
//   },
//   {
//     name: "Jeans",
//     price: 65,
//     category: "Clothing",
//     stock: 120,
//     discount: 12,
//     tags: ["fashion", "denim"],
//   },
//   {
//     name: "Socks (Pack)",
//     price: 15,
//     category: "Clothing",
//     stock: 400,
//     discount: 0,
//     tags: ["fashion", "essentials"],
//   },
//   {
//     name: "Winter Jacket",
//     price: 150,
//     category: "Clothing",
//     stock: 25,
//     discount: 25,
//     tags: ["fashion", "winter"],
//   },
// ]);

show ('collections')

db.products.countDocuments()

// Q.26

db.products.find({price:{$gt:1000}})

//Q.27

db.products.find({$and:[{price:{$gt:500}},{price:{$lt:2000}}]})

//Q.28

db.products.find({category:"Electronics"})

//Q.29

db.products.find({stock:{$lt:10}})

//Q.30

db.products.find({stock:0})

//Q.31

db.products.find().sort({price:1})

//Q.32

db.products.find().sort({price:-1}).limit(5)

//Q.33

db.products.find({name:/phone/})

// Q.34

db.products.find({name:/phone/,discount:{$gt:5}})

// Q.35

db.products.find({category:{$ne:"Electronics"}})

// Q.36

db.products.find({tags:{$in:['gaming']}})

// Q.37

db.products.find({tags:{$all:["gaming",'pc']}})

//Q.38

db.products.find({tags:{$size:2}})

//Q.39

// db.products.updateOne({},{$push:{tags:"new"}})
// db.products.find({tags:"new"})

db.products.updateMany({},{
    $unset:{tags:[]}
})