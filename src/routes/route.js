const express = require('express');
const externalModule = require('../logger/logger')
const externalModule2 = require('../util/helper')
const externalModule3 = require('../validator/formatter')
 const router = express.Router();
const chunk = require('chunk')
const fromPairs = require('lodash.frompairs');
const _ = require('lodash');
const lodash = require('lodash')


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


router.get('/hello', function (req, res) {
       const monTH = chunk(["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"], 3)
       console.log(monTH)
       const xyz = require('lodash');
       const x = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
       const newArray = xyz.tail(x);
       console.log(newArray);
       let arr1 = [1, 2, 3]
       let arr2 = [2, 3, 4, 4]
       let arr3 = [4, 5]
       let arr4 = [4, 6, 4]
       let arr5 = [5, 8]
       console.log('Merged array with unique values: ', lodash.union(arr1, arr2, arr3, arr4, arr5))
       const Array = [['horror', 'The Shining'], ['drama', 'Titanic'], ['thriller', 'Shutter Island'], ['fantasy', 'Pans Labyrinth']]
       const vc = _.fromPairs(Array);
       console.log(vc);

//pritesh sir prooblem solutions

       router.get("/sol1", function (req, res) {
              let arr = [1, 2, 3, 5, 6, 7]

              let total = 0;
              for (var i in arr) {
                     total = total+ arr[i];
              }

              let lastDigit = arr.pop()
              let consecutiveSum = lastDigit * (lastDigit + 1) / 2
              let missingNumber = consecutiveSum - total

              res.send({ data: missingNumber });
       });



       router.get("/sol2", function (req, res) {
              let arr = [33, 34, 35, 37, 38]
              let len = arr.length

              let total = 0;
              for (var i in arr) {
                     total = total+ arr[i];
              }
              let firstDigit = arr[0]
              let lastDigit = arr.pop()
              let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
              let missingNumber = consecutiveSum - total

              res.send({ data: missingNumber });
       });

      res.send('My last api!')

});

module.exports = router;
// adding this comment for no reasonnode src/index.jsgit 