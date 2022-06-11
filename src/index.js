const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const timestamp = require('time-stamp');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://debojitmahapatra:pdVCwu3ZCvlS3zZE@atlascluster.k19tx.mongodb.net/debojit199856789-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


 

  app.use (
    function (req, res, next) {
        let ipaddreSS=req.ip
        let url=req.originalUrl
        let currentdate=new Date();
        let datetime= currentdate.getDate() +" "
                                  +(currentdate.getMonth()+1)+" "
                                  +currentdate.getFullYear()+" "
                                  +currentdate.getHours()+" "
                                  +currentdate.getMinutes()+" "
                                  +currentdate.getSeconds()
       
        
        console.log(`${datetime} ${ipaddreSS} ${url}`); 
        next();
  }
  );
  
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
