var user = require("../models/user");
const jwt = require("jsonwebtoken");
const roles = require("../auth/role");
const bcrypt = require('bcrypt');
const e = require("express");

const saltRounds = 10;

exports.role = async function (req, res) {
  // find user to be switch role on:
  var result = await user.findOne({ 
    username: req.body.username
  });

  // assign role:
  result.role = req.body.role;
  var result = await result.save();

  res.status(200);
  res.json(result);
};

exports.login = async function (req, res) { 

  // find user to login:
  const result = await user.findOne({
    username: req.body.username,
  });

  // if password or crypted password is equal:
  if(
    (result.password == req.body.password) || 
    (await bcrypt.compare(req.body.password, result.password))
  ){
    // then generate token:
    const token = jwt.sign({
      sub: result.id, role: result.role 
      },
      process.env.ACCESS_TOKEN_SECRET
    ); 

    res.status(200);
    res.json({ token });
  }
  else {
    res.status(400).json({message: "Incorrect login info. Try Again!"});
  }
};

exports.register = async function (req, res) {
  try {
    // encrypt password:
    var bcryptPassword = await bcrypt.hash(req.body.password, saltRounds);    
    
    // create new user:
    const newUser = {
      username: req.body.username,
      password: bcryptPassword,
      role: req.body.role
    };
    var result = await user.create(newUser);

    res.status(200);
    res.json(result);
  }
  catch (e) {
    res.status(400).json({
      message: "Error: " + e,
    });
  }
};