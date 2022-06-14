const mid= function ( req, res, next) {
   
    let DataInHeaders= req.headers.isfreeappuser
    if(!DataInHeaders){
     console.log("No header")
     res.send("Header is missing ")
    }else{
     console.log("this working")
    }
   next()
 }


//  const mid1=async function ( req, res, next) {
   
//   let DataInHeaders= req.headers["isfreeappuser"]
//   if(DataInHeaders==true){
      
//    res.send({mag:"ammount: 0"})
//   }else{
//         let productprice=req.body.product_id.price
//         let userbalence=req.body.user_id.balance
//         if(productprice<=userbalence){
//           let deviteD=userbalence-productprice
//           res.send({msg:deviteD})
//         }else{
//           res.send("insuffiunt Balance")
//         }
//   }
//  next()
// }
 
module.exports.mid= mid
//module.exports.mid1= mid1