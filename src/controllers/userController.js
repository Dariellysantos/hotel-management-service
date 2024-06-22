const mongoose = require("mongoose");
const UserSchema = require("../models/userSchema");

const createUser = async (req, res) => {
    try {
      const newUser = new UserSchema({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        birthday: req.body.birthday,
        state: req.body.state,
        city: req.body.city,
        country: req.body.country,
      });
  
      const sevedUser = await newUser.save();
  
      res.status(200).json({
        message: "user successfully registered!",
        sevedUser,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  const getAll = async (req, res) => {
    try {
      const users = await UserSchema.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  
module.exports = {
    createUser,
    getAll
};