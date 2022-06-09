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
const FindOutAuthorNameWithBookCost= async function (req, res) {
    let data= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
    //because data returns the array
      for (let i = 0; i < data.length; i++) {
          const element = await AuthorModel.findOne({"author_id":data[i].author_id});
          res.send({msg: element.author_name})
      }
  
}
const booksbyauthorid= async function (req, res) {
    let bookid=req.params.Author_Id
    let x= await BookModel.find({author_id:bookid}).select("name")
    res.send({msg: x})
}
const listofauthors= async function (req, res) {
    let data= await AuthorModel.find({age:{$gt:50}}).select("author_id")
    let savedData= await BookModel.find({author_id:data[0].author_id})
    let ratings=savedData[0].ratings
   
   

        if (ratings<4) { 
            let author=  await AuthorModel.find()
            let authorname= author[0].author_name
            let authorage=author[0].age
            return  res.send({msg: authorname,authorage})
}
    
    res.send({msg:"No data abelable"})
}

module.exports.createBook= createBook
module.exports.createAuthor=createAuthor
module.exports.getBooksByChatenBhagat=getBooksByChatenBhagat
module.exports.authorofTwoStates= authorofTwoStates
module.exports.FindOutAuthorNameWithBookCost= FindOutAuthorNameWithBookCost
module.exports.booksbyauthorid= booksbyauthorid
module.exports.listofauthors= listofauthors