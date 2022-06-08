//const { count } = require("console")
const BookModel= require("../models/book")
const AuthorModel= require("../models/author")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const getBooksByChatenBhagat= async function (req, res) {
    let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let savedData= await BookModel.find({author_id:data[0].author_id})
    res.send({msg: savedData})
}
const authorofTwoStates= async function (req, res) {
    let data= await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let savedData= await AuthorModel.find({author_id:data.author_id}).select("author_name")
    prices=data.price
    res.send({msg: savedData,prices})
}

module.exports.createBook= createBook
module.exports.createAuthor=createAuthor
module.exports.getBooksByChatenBhagat=getBooksByChatenBhagat
module.exports.authorofTwoStates= authorofTwoStates