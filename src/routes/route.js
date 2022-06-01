const express = require('express');
const externalModule = require('../logger/logger')
const externalModule2 = require('../util/helper')
const externalModule3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.debojit)
       externalModule.debojit()
       res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule2.date)
       externalModule2.date()
        res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule2.mounth)
       externalModule2.mounth()
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule2.batch)
       externalModule2.batch()
    res.send('My third api!')
});
router.get('/test-me4', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule3.tRIM)
       externalModule3.tRIM()
    res.send('My 4th api!')
 });

 router.get('/test-me5', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule3.changetoLowercase)
       externalModule3.changetoLowercase()
    res.send('My 5th api!')
 });

 router.get('/test-me6', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule3.uppercase)
       externalModule3.uppercase()
    res.send('My 6th api!')
 });
// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
// });

module.exports = router;
// adding this comment for no reasonnode src/index.js