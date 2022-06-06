const UserModel= require("../models/userModel")

const bookS = async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const allbooks= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.bookS= bookS
module.exports.allbooks= allbooks