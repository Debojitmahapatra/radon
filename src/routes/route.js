const express = require('express');
const router = express.Router();

//const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook )
router.post("/createAuthor", bookController.createAuthor )
router.post("/createPubliser", bookController.createPubliser )
router.post("/getBooksWithAuthor", bookController.getBooksWithAuthorid )
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails )
router.post("/getBooksWithPubliser", bookController.getBooksWithPubliser )
router.put("/updateCover", bookController.updateCover )





// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;