const express = require('express')
const router = express.Router()

const {createUser, loginUser, getUserById, updateUserProfile} = require('../controllers/userController')
const {checkAuth, authrz} = require('../middleware/auth')
const {createProduct,getProducts, productById, updateProduct, deleteProduct} = require('../controllers/productController')
const {createCart, getCartById, updateCart, deleteCart} = require('../controllers/cartController')
//user's api
router.post("/register",  createUser);
router.post("/login", loginUser)
router.get("/user/:userId/profile", checkAuth, authrz, getUserById)
router.put("/user/:userId/profile", checkAuth, authrz, updateUserProfile)
//product api's
router.post("/products",  createProduct);
router.get("/products",  getProducts);
router.get("/products/:productId",  productById);
router.put("/products/:productId",  updateProduct);
router.delete("/products/:productId",  deleteProduct);
//cart api's
router.post("/users/:userId/cart", checkAuth, authrz, createCart);
router.get("/users/:userId/cart",checkAuth, authrz, getCartById);
//router.put("/users/:userId/cart",  updateCart);
router.delete("/users/:userId/cart",checkAuth, authrz, deleteCart);



 


router.all("/****", function (req, res) {
    res.status(404).send({
        status: false,
        message: "please enter the valid URL"
    })
})


module.exports = router