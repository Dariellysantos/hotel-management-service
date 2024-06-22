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

const getById = async (req, res) => {
    try {
        const user = req.params.id;
        let found = await UserSchema.findById(user);

        res.status(200).json(found);
    } catch (error) {
        if (user === undefined)
            res.status(500).json({
                message: error.message,
            });
    }
};

const deleteById = async (req, res) => {
    try {
        const user = req.params.id;
        let found = await UserSchema.findOneAndDelete(user);

        if (found === null) {
            res.status(404).json({
                message: "post not found.",
                code: "NOT_FOUND_ERROR",
            });
        }

        return res.status(200).json({
            message: "Post deleted successfully!",
            code: "SUCCESS",
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal error.",
            code: "INTERNAL_SERVER_ERROR",
        });
    }
};

module.exports = {
    createUser,
    getAll,
    getById,
    deleteById
};