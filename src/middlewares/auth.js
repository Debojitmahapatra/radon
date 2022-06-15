const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token)
     token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
   console.log(token);

    let UserId=req.params.userId
    let decodedToken = jwt.verify(token, "functionup-radon");
    let decetUser=decodedToken.userId
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
    else if(UserId!==decetUser)
      return res.send({ status: false, msg: "not allow to modyfy user" });
    else
    
    next()
}

module.exports.validateToken = validateToken