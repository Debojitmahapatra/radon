const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema( {
   

    user_id: {
        type: ObjectId,
        ref: "User",
       },
    product_id: {
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
    isfreeappuser:Boolean,
    date: String

}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema)
