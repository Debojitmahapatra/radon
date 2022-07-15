const express = require('express');
const router = express.Router();
const aws= require("aws-sdk")

const { createBook,getBooks,getBookById,updateBook,deleteBook} = require('../Controllers/bookController')
const { createUser,loginUser} = require('../Controllers/userController')
const { checkBody,validUserModel,validBookModel} = require("../vaildator/validations.js")
const {authoriseBook,authentication,authoriseParams}=require("../middlware/authentication")
const {createReview,updatedReviewById,deleteReview}=require('../Controllers/reviewController')

router.post('/register',checkBody,validUserModel,createUser)
router.post("/login",checkBody,loginUser)
router.post('/books',checkBody,authentication,validBookModel,authoriseBook,createBook)

router.get('/books',authentication,getBooks)

router.get('/books/:bookId',authentication,authoriseParams,getBookById) 
//router.get('/books/:bookId',getBookById)
router.put('/books/:bookId',authentication,authoriseParams,updateBook)

router.delete('/books/:bookId',authentication,authoriseParams,deleteBook)


router.post('/books/:bookId/review',checkBody,createReview)
router.put('/books/:bookId/review/:reviewId',checkBody,updatedReviewById)
router.delete('/books/:bookId/review/:reviewId',deleteReview)



aws.config.update({
    accessKeyId: "AKIAY3L35MCRVFM24Q7U",
    secretAccessKey: "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",
    region: "ap-south-1"
})

let uploadFile= async ( file) =>{
   return new Promise( function(resolve, reject) {
    // this function will upload file to aws and return the link
    let s3= new aws.S3({apiVersion: '2006-03-01'}); // we will be using the s3 service of aws

    var uploadParams= {
        ACL: "public-read",
        Bucket: "classroom-training-bucket",  //HERE
        Key: "abc/" + file.originalname, //HERE 
        Body: file.buffer
    }


    s3.upload( uploadParams, function (err, data ){
        if(err) {
            return reject({"error": err})
        }
        console.log(data)
        console.log("file uploaded succesfully")
        return resolve(data.Location)
    })

    // let data= await s3.upload( uploadParams)
    // if( data) return data.Location
    // else return "there is an error"

   })
}

router.post("/write-file-aws", async function(req, res){

    try{
        let files= req.files
        if(files && files.length>0){
            //upload to s3 and get the uploaded link
            // res.send the link back to frontend/postman
            let uploadedFileURL= await uploadFile( files[0] )
            res.status(201).send({msg: "file uploaded succesfully", data: uploadedFileURL})
        }
        else{
            res.status(400).send({ msg: "No file found" })
        }
        
    }
    catch(err){
        res.status(500).send({msg: err})
    }
    
})


module.exports = router
