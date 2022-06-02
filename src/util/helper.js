
const date = function () {
    let currentDate = new Date()
    console.log(currentDate)  
  
};

const mounth = function () {
    let currentdate = new Date()
    let currentMonth = currentdate.getMonth() + 1
    console.log('The current month is '+currentMonth)
}
const batch = function getBatchInfo() {
    console.log("batch name :RADON, week# : W3D3, Day#, the topic  of today is  the  Nodejs module system")
}
module.exports.date = date
module.exports.mounth = mounth
module.exports.batch = batch