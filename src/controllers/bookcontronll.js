const { count } = require("console")
const BookModel= require("../models/bookModelS")

const createBookS= async function (req, res) {
    let data= req.body
     let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})
}
const getBooksInYear= async function (req, res) {
    let year= req.body.year
    let allYears= await BookModel.find( {  year:year } )
    res.send({msg: allYears})
}
const getParticularBooks= async function (req, res) {
    let condition= req.body
    let allYears= await BookModel.find( condition )
    res.send({msg: allYears})
}
const getXINRBooks= async function (req, res) {
    letbookprice= await BookModel.find(  
        {"prices.indianPrice":{$in:['100rs','200rs','500rs']} } )
    res.send({msg:  letbookprice})
}
const getRandomBooks= async function (req, res) {
    
    let RandomBooks= await BookModel.find( {$or:[{stockAvailable:true},{pages:{gt:500}}] })
    res.send({msg: RandomBooks})
}


module.exports.createBookS= createBookS
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks