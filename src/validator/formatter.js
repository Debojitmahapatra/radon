
const tRIM =function trim() {
    const trim = "       'functionUp'       "
      console.log(trim.trim());
 }


 const changetoLowercase=function changetoLowerCase(){
         let texT='CHANGE THE CASE OF THE STRING TO LOWER'
         let lower = texT.toLowerCase()
         console.log(lower)
 }
 
 const  uppercase=function  changeToUpperCase()  {
            let texT1='changes the case of the string to upper case'
            let uPPER = texT1.toUpperCase()
            console.log(uPPER)
    }       
 module.exports.tRIM = tRIM
 module.exports.changetoLowercase = changetoLowercase
 module.exports.uppercase = uppercase
