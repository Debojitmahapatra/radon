const mongoose = require("mongoose");

const internModel = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
   },
   mobile: {
      type: String,
      required: true,
      unique: true
   },
   collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true
   },
   isDeleted: {
      type: Boolean,
      default: false
   }

})

module.exports = mongoose.model('Intern', internModel)