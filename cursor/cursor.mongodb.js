show ('dbs')
use ('test')
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

db.data.find().limit(5)

