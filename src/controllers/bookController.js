const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const PubliserModel= require("../models/publisermodel")
//q=1
const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
//q=2
const createAuthor= async function (req, res) {
    let author = req.body
    let bookCreated = await authorModel.create(author)
    res.send({data: bookCreated})
}
//q==3
const createPubliser= async function (req, res) {
    let publiser = req.body
    let bookCreated = await PubliserModel.create(publiser)
    res.send({data: bookCreated})
}


const getBooksWithAuthorid = async function (req, res) {
    let all=req.body
    let specificBook = await bookModel.find(all)
    if (specificBook[0]==null) {
        res.send("that the author is not present")
        } else if(all.author_id!=null){
            res.send({data: specificBook})
            }else{
                   res.send(" the author id is  required ")
}}

const getBooksWithPubliser = async function (req, res) {
    let all=req.body
    let specificBook = await bookModel.find(all)
    if (specificBook[0]==null) {
        res.send("that the Publiser is not present")
        } else if(all.publisher!=null){
            res.send({data: specificBook})
            }else{
                   res.send(" the publiser detail is required ")
}}

//q=4
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher')
    res.send({data: specificBook})
}

const updateCover = async function (req, res) {
    let specificBook = await PubliserModel.find()
  
   res.send({data: specificBook})
}



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.createPubliser= createPubliser
 module.exports.getBooksWithAuthorid= getBooksWithAuthorid
 module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
 module.exports.getBooksWithPubliser=getBooksWithPubliser
 module.exports.updateCover=updateCover