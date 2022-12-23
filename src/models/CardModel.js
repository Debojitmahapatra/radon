const mongoose = require('mongoose');

const ObjectId=mongoose.Schema.Types.ObjectId


const cardSchema = new mongoose.Schema( {

     cardNumber: {type:String,
          required:true}, 
     cardType: {type:String,
          required:true, 
          enum:["REGULAR", "SPECIAL"]}, 
     customerName:{type:String,
          required:true},
     status:{
          type:String,
          default:"ACTIVE",
          enum:["ACTIVE", "INACTIVE"]
          },
     vision:{type:String,required:true},
     customerID: {type:ObjectId, ref:'Customer'},
}
   
, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema)