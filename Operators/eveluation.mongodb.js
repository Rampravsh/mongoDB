use ('shop')

// db.employees.insertMany([
//     { name: "ram", age: 30, department: "HR" ,salary: 10000,bonus: 15000},
//     { name: "Bob", age: 25, department: "Engineering" ,salary: 70000,bonus: 7000},
//     { name: "Charlie", age: 35, department: "Sales" ,salary: 60000,bonus: 6000},
//     { name: "David", age: 28, department: "Engineering" ,salary: 75000,bonus: 7500},
//     { name: "Eve", age: 32, department: "HR" ,salary: 55000,bonus: 5500}
// ])



// db.employees.find({
//     $expr:{
//         $gt:["$salary","$bonus"]
//     }
// })

// db.employees.find()

// db.employees.find({
//     $expr:{$lt:[{$add:["$salary","$bonus"]},60000]}
// })

// db.products.find({$expr:{
//     $gt:["$discountPercentage",10]
// }})

// db.students.insertMany([
//     { name: "Alice", math: 85, science: 90, literature: 78 },
//     { name: "Bob", math: 92, science: 88, literature: 95 },
//     { name: "Charlie", math: 78, science: 85, literature: 80 },
//     { name: "David", math: 90, science: 92, literature: 88 },
//     { name: "Eve", math: 88, science: 91, literature: 82 }
// ])

// db.students.find({
//     $expr:{
//         $gt:["$math","$science"]
//     }
// })

// db.students.find({
//     name:{$regex:'vi'}
// })


