use("test");


db.users.insertMany([
  {
    name: "Aarav Sharma",
    age: 25,
    city: "Delhi",
    email: "aarav@example.com",
    phone: "9876543210",
    isActive: true,
  },
  {
    name: "Ishani Gupta",
    age: 22,
    city: "Mumbai",
    email: "ishani@example.com",
    phone: "9876543211",
    isActive: false,
  },
  {
    name: "Rohan Verma",
    age: 30,
    city: "Bangalore",
    email: "rohan@example.com",
    phone: "9876543212",
    isActive: true,
  },
  {
    name: "Sanya Malhotra",
    age: 27,
    city: "Pune",
    email: "sanya@example.com",
    phone: "9876543213",
    isActive: true,
  },
  {
    name: "Kabir Singh",
    age: 24,
    city: "Hyderabad",
    email: "kabir@example.com",
    phone: "9876543214",
    isActive: false,
  },
  {
    name: "Ananya Pandey",
    age: 21,
    city: "Chennai",
    email: "ananya@example.com",
    phone: "9876543215",
    isActive: true,
  },
  {
    name: "Vikram Rathore",
    age: 35,
    city: "Jaipur",
    email: "vikram@example.com",
    phone: "9876543216",
    isActive: true,
  },
  {
    name: "Meera Iyer",
    age: 28,
    city: "Kolkata",
    email: "meera@example.com",
    phone: "9876543217",
    isActive: false,
  },
  {
    name: "Aditya Roy",
    age: 26,
    city: "Lucknow",
    email: "aditya@example.com",
    phone: "9876543218",
    isActive: true,
  },
  {
    name: "Tara Sutaria",
    age: 23,
    city: "Ahmedabad",
    email: "tara@example.com",
    phone: "9876543219",
    isActive: true,
  },
  {
    name: "Arjun Kapoor",
    age: 29,
    city: "Chandigarh",
    email: "arjun@example.com",
    phone: "9876543220",
    isActive: false,
  },
  {
    name: "Kiara Advani",
    age: 25,
    city: "Indore",
    email: "kiara@example.com",
    phone: "9876543221",
    isActive: true,
  },
  {
    name: "Siddharth Jain",
    age: 32,
    city: "Bhopal",
    email: "sid@example.com",
    phone: "9876543222",
    isActive: true,
  },
  {
    name: "Pooja Hegde",
    age: 27,
    city: "Surat",
    email: "pooja@example.com",
    phone: "9876543223",
    isActive: false,
  },
  {
    name: "Varun Dhawan",
    age: 31,
    city: "Nagpur",
    email: "varun@example.com",
    phone: "9876543224",
    isActive: true,
  },
  {
    name: "Kriti Sanon",
    age: 28,
    city: "Patna",
    email: "kriti@example.com",
    phone: "9876543225",
    isActive: true,
  },
  {
    name: "Ayushmann Khurrana",
    age: 34,
    city: "Amritsar",
    email: "ayush@example.com",
    phone: "9876543226",
    isActive: false,
  },
  {
    name: "Shraddha Kapoor",
    age: 26,
    city: "Kochi",
    email: "shraddha@example.com",
    phone: "9876543227",
    isActive: true,
  },
  {
    name: "Ranbir Kapoor",
    age: 33,
    city: "Shimla",
    email: "ranbir@example.com",
    phone: "9876543228",
    isActive: true,
  },
  {
    name: "Alia Bhatt",
    age: 24,
    city: "Manali",
    email: "alia@example.com",
    phone: "9876543229",
    isActive: false,
  },
]);


db.orders.insertMany([
  { user: "Aarav Sharma", totalAmount: 1200, status: "Delivered", orderDate: new Date("2023-10-01") },
  { user: "Ishani Gupta", totalAmount: 25, status: "Pending", orderDate: new Date("2023-10-02") },
  { user: "Rohan Verma", totalAmount: 80, status: "Shipped", orderDate: new Date("2023-10-03") },
  { user: "Sanya Malhotra", totalAmount: 300, status: "Delivered", orderDate: new Date("2023-10-04") },
  { user: "Kabir Singh", totalAmount: 15, status: "Cancelled", orderDate: new Date("2023-10-05") },
  { user: "Ananya Pandey", totalAmount: 800, status: "Delivered", orderDate: new Date("2023-10-06") },
  { user: "Vikram Rathore", totalAmount: 50, status: "Shipped", orderDate: new Date("2023-10-07") },
  { user: "Meera Iyer", totalAmount: 250, status: "Pending", orderDate: new Date("2023-10-08") },
  { user: "Aditya Roy", totalAmount: 100, status: "Delivered", orderDate: new Date("2023-10-09") },
  { user: "Tara Sutaria", totalAmount: 120, status: "Shipped", orderDate: new Date("2023-10-10") },
  { user: "Arjun Kapoor", totalAmount: 35, status: "Delivered", orderDate: new Date("2023-10-11") },
  { user: "Kiara Advani", totalAmount: 200, status: "Pending", orderDate: new Date("2023-10-12") },
  { user: "Siddharth Jain", totalAmount: 20, status: "Delivered", orderDate: new Date("2023-10-13") },
  { user: "Pooja Hegde", totalAmount: 40, status: "Cancelled", orderDate: new Date("2023-10-14") },
  { user: "Varun Dhawan", totalAmount: 30, status: "Shipped", orderDate: new Date("2023-10-15") },
  { user: "Kriti Sanon", totalAmount: 90, status: "Delivered", orderDate: new Date("2023-10-16") },
  { user: "Ayushmann Khurrana", totalAmount: 45, status: "Pending", orderDate: new Date("2023-10-17") },
  { user: "Shraddha Kapoor", totalAmount: 180, status: "Delivered", orderDate: new Date("2023-10-18") },
  { user: "Ranbir Kapoor", totalAmount: 60, status: "Shipped", orderDate: new Date("2023-10-19") },
  { user: "Alia Bhatt", totalAmount: 110, status: "Delivered", orderDate: new Date("2023-10-20") }
])




db.products.insertMany([
  {
    name: "Laptop Pro",
    price: 1200,
    category: "Electronics",
    stock: 15,
    discount: 10,
    tags: ["tech", "work"],
    reviews: [{ user: "Aarav Sharma", rating: 5 }]
  },
  {
    name: "Wireless Mouse",
    price: 25,
    category: "Accessories",
    stock: 100,
    discount: 5,
    tags: ["office", "pc"],
    reviews: [{ user: "Ishani Gupta", rating: 4 }]
  },
  {
    name: "Mechanical Keyboard",
    price: 80,
    category: "Accessories",
    stock: 45,
    discount: 15,
    tags: ["gaming", "pc"],
    reviews: [{ user: "Rohan Verma", rating: 5 }]
  },
  {
    name: "Gaming Monitor",
    price: 300,
    category: "Electronics",
    stock: 20,
    discount: 12,
    tags: ["gaming", "display"],
    reviews: [{ user: "Sanya Malhotra", rating: 4 }]
  },
  {
    name: "USB-C Cable",
    price: 15,
    category: "Accessories",
    stock: 200,
    discount: 0,
    tags: ["cable", "tech"],
    reviews: [{ user: "Kabir Singh", rating: 5 }]
  },
  {
    name: "Smartphone X",
    price: 800,
    category: "Electronics",
    stock: 30,
    discount: 5,
    tags: ["mobile", "tech"],
    reviews: [{ user: "Ananya Pandey", rating: 4 }]
  },
  {
    name: "Bluetooth Speaker",
    price: 50,
    category: "Electronics",
    stock: 60,
    discount: 20,
    tags: ["audio", "music"],
    reviews: [{ user: "Vikram Rathore", rating: 3 }]
  },
  {
    name: "Noise Cancelling Headphones",
    price: 250,
    category: "Electronics",
    stock: 25,
    discount: 10,
    tags: ["audio", "travel"],
    reviews: [{ user: "Meera Iyer", rating: 5 }]
  },
  {
    name: "External Hard Drive",
    price: 100,
    category: "Electronics",
    stock: 40,
    discount: 8,
    tags: ["storage", "backup"],
    reviews: [{ user: "Aditya Roy", rating: 4 }]
  },
  {
    name: "Webcam 4K",
    price: 120,
    category: "Electronics",
    stock: 18,
    discount: 10,
    tags: ["video", "work"],
    reviews: [{ user: "Tara Sutaria", rating: 4 }]
  },
  {
    name: "Desk Organizer",
    price: 22,
    category: "Stationery",
    stock: 85,
    discount: 10,
    tags: ["office", "storage"],
    reviews: [{ user: "Ranbir Kapoor", rating: 4 }]
  },
]);

db.blogs.insertMany([
  {
    title: "Introduction to MongoDB",
    views: 1200,
    comments: [
      { user: "Aarav Sharma", text: "Great introduction!" },
      { user: "Ishani Gupta", text: "Very helpful, thanks." }
    ]
  },
  {
    title: "Advanced Node.js Patterns",
    views: 850,
    comments: [
      { user: "Rohan Verma", text: "I learned a lot about streams." }
    ]
  },
  {
    title: "React vs Vue in 2024",
    views: 2500,
    comments: [
      { user: "Sanya Malhotra", text: "React still feels more robust." },
      { user: "Kabir Singh", text: "Vue is much easier to pick up." }
    ]
  },
  {
    title: "Understanding Async/Await",
    views: 1100,
    comments: []
  },
  {
    title: "CSS Grid Layout Guide",
    views: 900,
    comments: [
      { user: "Ananya Pandey", text: "Finally understood grid-template-areas!" }
    ]
  },
  {
    title: "Docker for Beginners",
    views: 1500,
    comments: [
      { user: "Vikram Rathore", text: "Clear and concise." }
    ]
  },
  { title: "TypeScript Best Practices", views: 700, comments: [] },
  {
    title: "Microservices Architecture",
    views: 2100,
    comments: [{ user: "Meera Iyer", text: "Scaling is so much easier now." }]
  },
  { title: "Python for Data Science", views: 3000, comments: [] },
  { title: "Cybersecurity Essentials", views: 450, comments: [] }
])