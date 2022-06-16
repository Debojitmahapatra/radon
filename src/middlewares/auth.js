const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token)
     token = req.headers["x-auth-token"];
    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });
   console.log(token);

    let UserId=req.params.userId
    let decodedToken = jwt.verify(token, "functionup-radon");
    let decetUser=decodedToken.userId
    if (!decodedToken) {
      return res.status(400).send({ status: false, msg: "token is invalid" });
    }
    else if(UserId!==decetUser)
      return res.status(401).send({ status: false, msg: "not allow to modyfy user" });
    else
  
    next()
  } 
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

module.exports.validateToken = validateToken