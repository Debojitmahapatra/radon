let axios = require("axios")

let getWeather = async function (req, res) {
    try {
        let place = req.query.place
        let appid = req.query.appid
        console.log(`query params are: ${place} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q= ${place}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getWeatherSelected = async function (req, res) {
    try {
        // let place = req.query.place
        
        let Citys= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let Temps=[]
       
        for (let i = 0; i < Citys.length; i++) {
           let elements = {city: Citys[i]};
          
          var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${ Citys[i]}&appid=65b721aecda9d17409fd5b38aa7ff582`
           }
        let result = await axios(options)
        elements.temp = result.data.main.temp
        Temps.push(elements)
        }
      let short=  Temps.sort(function(a,b){return a.temp-b.temp })
    
    console.log(short)
    res.status(200).send({ status:true, msg: short }) 
  }  
      
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getWeather = getWeather
module.exports.getWeatherSelected = getWeatherSelected