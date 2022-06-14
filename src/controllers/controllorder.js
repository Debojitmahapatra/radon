const { count } = require("console")
const OrderModel= require("../models/order")

const createOrder= async function (req, res) {
    let data = req.body
 
    let savedData= await OrderModel.create(data)
    res.send({data: savedData})
}

const getOrdersWithuserid = async function (req, res) {
    let all=req.body
    let specificBook = await OrderModel.find(all)
    if (specificBook[0]==null) {
        res.send(" the user_id is not present")
        } else if(all.user_id!=null){
            res.send({data: specificBook})
            }else{
                   res.send(" the user_id is  required ")
}}

const getOrdersWithproductid = async function (req, res) {
    let all=req.body
    let specificBook = await OrderModel.find(all)
    if (specificBook[0]==null) {
        res.send(" the product_id is not present")
        } else if(all.product_id!=null){
            res.send({data: specificBook})
            }else{
                   res.send(" the product_id is  required ")
}
}

const getOrders = async function (req, res) {
    let specificBook = await OrderModel.find().populate('user_id').populate('product_id')
    res.send({data: specificBook})
}

module.exports.createOrder= createOrder
module.exports.getOrdersWithuserid= getOrdersWithuserid
module.exports.getOrdersWithproductid= getOrdersWithproductid
module.exports.getOrders= getOrders
