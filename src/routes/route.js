const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();
let Movies = ['Heathers', 'Europa Report', 'Fellowship of the Ring', 'Silver Linings Playbook']
const Films = [{
    "id": 1,
    "name": "The Shining"
}, {
    "id": 2,
    "name": "Incendies"
}, {
    "id": 3,
    "name": "Rang de Basanti"
}, {
    "id": 4,
    "name": "Finding Nemo"
},

]

// assignment 1

router.get('/movies', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    res.send(Movies)
})



// assignment 2 & 3


router.get('/movies/:indexNumber', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    let indexNumber = req.params.indexNumber
    let arrlenth = Movies.length
    for (let i = 0; i < Movies.length; i++) {
        const element = Movies[i];
        if (indexNumber == i) {
            console.log('movies  name is ' + element)
        } else if (indexNumber > arrlenth) {
            console.log(" use a valid index ")
            break;
        }

    }
    res.send("done")
})

// assignment 4

router.get('/films', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    res.send(Films)
})

// assignment 5
router.get('/films/:filmId', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    let filmId = req.params.filmId
    let flimSlenth = Films.length

    for (let i = 0; i < Films.length; i++) {

        if (filmId == i + 1) {
            var elem = Films[i];
            var papu = ('Flim id is ' + elem.id + "," + 'flim name is   ' + elem.name)
               console.log(papu)

        } else if (filmId > flimSlenth) {
            console.log(" No movie exists with this id")
            res.send(" No movie exists with this id")
            break;
        }

    }
    res.send(elem)
})

module.exports = router;
// adding this comment for no reason