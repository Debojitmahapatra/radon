const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
       
        type: String,
        unique: true,
        required: true
    }, 
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021},
    authorName: String, 
    totalpages:Number,
    tags: [String],
    stockAvailable : Boolean,
    
   
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)