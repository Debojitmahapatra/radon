const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {

  try {
    let data = req.body
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data)
      res.status(201).send({ msg: savedData })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}



const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    if (Object.keys(userName).length && Object.keys(password).length != 0) {
      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.status(400).send({
          status: false,
          msg: "username or the password is not correct",
        });
      else {

        let token = jwt.sign(
          {
            userId: user._id.toString(),
            batch: "radon",
            organisation: "FUnctionUp",
          },
          "functionup-radon"
        );
        res.status(201).send({ status: true, data: token });
      }
    } else res.status(401).send({ msg: "Log in is requerd" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}


const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    if (userId != 0) {
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.status(404).send({ status: false, msg: "No such user exists" });
      else
        res.status(201).send({ msg: userDetails })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}



const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    if (userId != 0) {
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.status(404).send({ status: false, msg: "No such user exists" });

      else res.status(201).send({ msg: userDetails })
    } else {
      let userData = req.body;
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
      res.send({ status: "User updated", data: updatedUser });
    }
  } 
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    if (userId != 0) {
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.status(404).send({ status: false, msg: "No such user exists" });

      else res.status(201).send({ msg: userDetails })
    } else {
      
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
      res.status(200).send({  status: true, data: updatedUser });
    }
  } 
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
