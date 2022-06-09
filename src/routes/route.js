const express = require('express');
const router = express.Router();

const controlbooks= require("../controllers/controlbooks")


router.post("/createBook", controlbooks.createBook )
router.post("/createAuthor", controlbooks.createAuthor )
router.get("/getBooksByChatenBhagat", controlbooks.getBooksByChatenBhagat )
router.get("/authorofTwoStates", controlbooks.authorofTwoStates )
router.get("/FindOutAuthorNameWithBookCost", controlbooks.FindOutAuthorNameWithBookCost )
router.get("/authorofTwoStates", controlbooks.authorofTwoStates )
router.get("/books-by-authorid/:Author_Id", controlbooks.booksbyauthorid )
router.get("/listofauthors", controlbooks.listofauthors)


module.exports = router;