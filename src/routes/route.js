const express = require('express');
const router = express.Router();

const controlbooks= require("../controllers/controlbooks")


router.post("/createBook", controlbooks.createBook )
router.post("/createAuthor", controlbooks.createAuthor )
router.get("/getBooksByChatenBhagat", controlbooks.getBooksByChatenBhagat )
router.get("/authorofTwoStates", controlbooks.authorofTwoStates )

module.exports = router;