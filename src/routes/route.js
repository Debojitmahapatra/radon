const express = require('express');
const router = express.Router();

const UserController= require("../controllers/controlluser")
const controllorder= require("../controllers/controllorder")
const controllproduct= require("../controllers/productController")
const commonMW = require ("../middlewares/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", controllproduct.createProduct )

router.post("/createUser", commonMW.mid, UserController.createUser)

router.post("/createOrder", commonMW.mid, controllorder.createOrder)

router.post("/getOrdersWithuserid", commonMW.mid, controllorder.getOrdersWithuserid)

router.post("/getOrdersWithproductid", commonMW.mid, controllorder.getOrdersWithproductid)

router.get("/getOrders",  controllorder.getOrders)
//router.post("/getOrders", commonMW.mid1, controllorder.getOrders)


module.exports = router;

