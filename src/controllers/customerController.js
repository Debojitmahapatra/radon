const CustomerModel = require("../models/CustomerModel")
// const jwt = require("jsonwebtoken");
const valid = require("../middlewares/validation")
const { v4: uuidv4 } = require('uuid');




const re=/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;
//====================================create author
const createCustomer = async function (req, res) {
  try {
    let data = req.body

    if (!valid.isValidRequestBody(data)) { return res.status(400).send({ status: false, message: "Please enter details in the request " }) }

    let { firstName, lastName, mobileNumber,DOB, emailID, address,status,customerID } = data

    //valids--
    //firstName
    if (!valid.isValid(firstName)) {
      return res.status(400).send({ status: false, message: "Please enter a valid firstName" })
    }
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      return res.status(400).send({ status: false, message: "firstName should alpha characters" })
    };

    //lastname
    if (!valid.isValid(lastName)) {
      return res.status(400).send({ status: false, message: "Please enter a valid lastName" })
    }
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      return res.status(400).send({ status: false, message: "lastName should alpha characters" })
    }

    //moobile number
    if (!valid.isValid(mobileNumber)) { return res.status(400).send({ status: false, message: "Please enter a valid mobileNumber" }) }
    if (!(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(mobileNumber))) { return res.status(400).send({ status: false, message: "mobileNumber number not valid" }); }
    const mobileNumberAlreadyExists = await CustomerModel.findOne({ mobileNumber: mobileNumber })
    if (mobileNumberAlreadyExists) { return res.status(400).send({ status: false, message: "mobileNumber number already exists" }) }
    
    //date of birth
     if (!valid.isValid(DOB)) {
      return res.status(400).send({ status: false, message: "Please enter a valid DOB" })
    }
    if (!re.test(DOB)) {
      return res.status(400).send({ status: false, message: "DOB should alpha characters" })
    };

    //emailID
    if (!valid.isValid(emailID)) {
      return res.status(400).send({ status: false, message: "Please enter a valid emailID" })
    }
    //emailID unique check ---
    const isUniqueemailID = await CustomerModel.findOne({ emailID: emailID });
    if (isUniqueemailID) { return res.status(400).send({ status: false, message: "Please enter a unique emailID" }) }
    //emailID regex check ---

    if (!(emailID.trim()).match(/^[a-zA-Z_\.\-0-9]+[@][a-z]{3,6}[.][a-z]{2,4}$/)) { return res.status(400).send({ status: false, message: 'invalid E-mail' }) };

    if (!valid.isValid(address)) {
      return res.status(400).send({ status: false, message: "Please enter a valid address" })
    }

    //customer id
    custom=uuidv4();
   // status
   if (!valid.isValid(status)) {
    return res.status(400).send({ status: false, message: "Please enter a valid status" })} 
  let check3 = ["ACTIVE","INACTIVE"]
  let checkEnum = await check3.find(element => element==status)
    if(!checkEnum)
    {return  res.status(400).send({status: false, msg : "Enter your status from this Only[ACTIVE,INACTIVE] "})} 
  
  let finelresult={
    firstName, lastName, mobileNumber,DOB, emailID, address,status,customerID:custom
  }
  let savedData = await CustomerModel.create(finelresult)
    res.status(201).send({ status: true, data: savedData })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

let getCustomer = async function (req, res) {
  try { 
      let queryData=req.query
      let {status}=queryData
      
      let obj={isDeleted:false}
      if(status){
      let check3 = ["ACTIVE","INACTIVE"]
      let checkEnum = await check3.find(element => element==status)
        if(!checkEnum){return  res.status(400).send({status: false, msg : "Enter your status from this Only[ACTIVE,INACTIVE] "})} 
           obj.status=status
      }
        let data = await CustomerModel.find(obj)
      
        if (data.length > 0)
          {return res.status(200).send({ status: true, data: data })}
      else
          {return res.status(404).send({ status: false, msg: "No data found" })}

  }
  catch (err) {
      res.status(500).send({ error: err.message })
  }
}

const deleteCustomer = async function (req, res) {
  try {
   
      let customerID = req.params.customerID
     // console.log(customerID);
      let data = await CustomerModel.find({ _id: customerID, isDeleted: false })
      if (data.length > 0) {
          let DeleteBlog = await CustomerModel.findOneAndUpdate({ _id: customerID }, { $set: { isDeleted: true, deletedAt: Date.now() } }, { new: true })
          res.status(200).send({ status: true ,massage:"Deleted"})
      }
      else return res.status(404).send({ status: false, msg: "no document found" })
  }
  catch (err) {
      res.status(500).send({ error: err.message })
  }
}

module.exports.createCustomer = createCustomer
module.exports.getCustomer=getCustomer
module.exports.deleteCustomer=deleteCustomer





