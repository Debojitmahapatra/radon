const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookcontronll.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBookS )
router.get("/bookList", BookController.bookList)
router.post("/getBooksInYear", BookController.getBooksInYear)
router.post("/getParticularBooks", BookController.getParticularBooks)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)



module.exports = router;