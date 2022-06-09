const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:String,
    author_id:{
        type:Number,
        require:true
    },
    price:Number,
    ratings:String

},{ timestamps: true });

module.exports = mongoose.model('Book', bookSchema)