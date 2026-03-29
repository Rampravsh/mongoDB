show("dbs");
use("test");
// show ('collections')

// let arr=[]

// for (let index = 0; index < 100; index++) {
//     arr.push({val:index})
// }

// db.data.insertMany(arr)

// const cursor = db.data.find()

// console.log(cursor)
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.hasNext())

// while(cursor.hasNext()){
//     console.log(cursor.next())
// }

// db.data.find().sort({val:-1})

// db.data.find().limit(5)

// db.data.find().skip(5).limit(10)

let page = 2;
const limit = 10;
db.data.find().skip((page-1)*limit).limit(limit);
