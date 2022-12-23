const mongoose = require('mongoose')
const CustomerModel = require('../models/CustomerModel.js')
const CardModel = require('../models/CardModel')
const valid = require("../middlewares/validation")



let createCard = async function (req, res) {
    try {
        let bodyData = req.body
        let {cardType,customerName,status,vision,customerID} = bodyData
     
   //card number

    let k="C001"
   let lastIn=await CardModel.find({}).sort({_id:-1}).limit(1)
  // console.log(lastIn[0].cardNumber);
   if(lastIn.length>0){ let s=lastIn[0].cardNumber
    let f=s.slice(3)
    let r=parseInt(f)
    r++
    let g=s.slice(0,3)
      k=g+r}

      //  cardType
      if (!valid.isValid(cardType)) {
        return res.status(400).send({ status: false, message: "Please enter a valid cardType" })} 
      let check3 = ["REGULAR", "SPECIAL"]
      let checkEnum = await check3.find(element => element==cardType)
        if(!checkEnum)
        {return  res.status(400).send({status: false, msg : "Enter your cardType from this Only [REGULAR, SPECIAL] "})} 
        
    //customer name
    if (!valid.isValid(customerName)) return res.status(400).send({ status: false, message: "Please enter customerName" })
    if (!/^[a-zA-Z ]+$/.test(customerName)) return res.status(400).send({ status: false, message: "Please enter valid customerName" })
   
    //status
    if(status){
        let check3 = ["ACTIVE","INACTIVE"]
        let checkEnum = await check3.find(element => element==status)
          if(!checkEnum){return  res.status(400).send({status: false, msg : "Enter your status from this Only[ACTIVE,INACTIVE] "})}         
        }
    if(!status){
        status="ACTIVE"
    }
    //vision
    if (!valid.isValid(vision)) return res.status(400).send({ status: false, message: "Please enter vision" })

    //customerID
    if (!valid.isValid(customerID)) return res.status(400).send({ status: false, message: "Please enter customerID" })
    if (!valid.isValidObjectId(customerID)) return res.status(400).send({ status: false, message: "Please enter valid customerID" })
    let ispresent=await CustomerModel.findById(customerID)
    if(!ispresent){ return res.status(404).send({ status: false, message: "customer not found" })}

let finalData={
    cardNumber:k,cardType,customerName,status,vision,customerID
}
    let create = await CardModel.create(finalData)
        res.status(201).send({ status: true, data: create })
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}


let getCard = async function (req, res) {
    try {      
        let obj={isDeleted:false}
          let data = await CardModel.find(obj)
        
          if (data.length > 0)
            {return res.status(200).send({ status: true, data: data })}
        else
            {return res.status(404).send({ status: false, msg: "No card found" })}

    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}






module.exports = { createCard,getCard}