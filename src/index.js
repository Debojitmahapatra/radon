const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const  mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://debojit:rJuLc4nyipWKU6tV@cluster1.31noc.mongodb.net/group21Database-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
