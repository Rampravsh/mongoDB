// Q.26

use("test");


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