const mongoose = require('mongoose');



const customerSchema = new mongoose.Schema( {
    firstName: { type:String, required:true}, 
    lastName: {type:String ,required:true}, 
     mobileNumber:{ 
        type: String,
        trim: true,
        unique: true,
        required: true},
        DOB:{
            type:Date,
            required: true
        },
     emailID: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    address:{
        type:String
    },
    customerID:{
        type:String,
        required:true
    },
    status:{
    type:String,
    required:true,
     enum:["ACTIVE", "INACTIVE"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

  

}, { timestamps: true });


module.exports = mongoose.model('Customer', customerSchema)