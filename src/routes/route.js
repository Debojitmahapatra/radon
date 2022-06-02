const express = require('express');
const externalModule = require('../logger/logger')
const externalModule2 = require('../util/helper')
const externalModule3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
   
       externalModule.debojit()
       externalModule2.date()
       externalModule2.mounth()
       externalModule2.batch()
       externalModule3.tRIM()
       externalModule3.changetoLowercase()
       externalModule3.uppercase()
       res.send('My first ever api!')
});


// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
// });

module.exports = router;
// adding this comment for no reasonnode src/index.js