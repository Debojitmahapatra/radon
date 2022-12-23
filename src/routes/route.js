const express = require('express');
const router = express.Router();

const {createCustomer,getCustomer,deleteCustomer}=require("../controllers/customerController")
const { createCard,getCard}=require("../controllers/cardController")


//customar apis
 router.post("/customer",createCustomer)
 router.get("/customer",getCustomer)
 router.delete("/customer/:customerID",deleteCustomer)

//card apis
router.post("/card",createCard)
router.get("/card",getCard)

module.exports = router; 

