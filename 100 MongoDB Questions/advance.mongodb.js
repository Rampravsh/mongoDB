use('test')

show ('collections')

db.products.find()

// Q.61

// db.products.find({'reviews.user':/Vikram/})

//Q.62

//❌❌❌
// db.products.find({'reviews.user':/Sharma/,"reviews.rating":5})

db.products.find({
    reviews:{
        $elemMatch:{
            user:'Sanya Malhotra',
            rating:4
        }
    }
})