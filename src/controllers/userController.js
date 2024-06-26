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

        if (
            newUser.email === "" ||
            newUser.email.indexOf("@") < 0 ||
            newUser.email.indexOf(".com") < 0
        ) {
            return res.status(400).json({
                message: "Empty or invalid email.",
                code: "ERROR_INVALID_EMAIL",
            });
        }
        const sevedUser = await newUser.save();

        return res.status(201).json({
            message: "User registered successfully!",
            sevedUser,
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal error.",
            code: "INTERNAL_SERVER_ERROR",
        });
    }
};

const getAll = async (req, res) => {
    try {
        const users = await UserSchema.find();

        if (users.length === 0) {
            return res.status(404).json({
                message: "User not found.",
                code: "NOT_FOUND_ERROR",
            });
        }

        return res.status(200).json({
            message: "Post seved successfully!",
            code: "SUCCESS",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal error.",
            code: "INTERNAL_SERVER_ERROR",
        });
    }
};

const getById = async (req, res) => {
    try {
        const user = req.params.id;
        let list = await UserSchema.find();
        let found = list.find(i => i._id == user)

        if (!found) {
            return res.status(404).json({
                message: "User not found.",
                code: "NOT_FOUND_ERROR",
            });
        }

        res.status(200).json({
            message: "User found!",
            code: "SUCCESS",
            body: found,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal error.",
            code: "INTERNAL_SERVER_ERROR",
        });
    }
};

const updateUserById = async (req, res) => {
    try {
        const userIdParam = req.params.id;

        const list = await UserSchema.find();
        let find = list.find(i => i._id == userIdParam)

        if (!find) {
            return res.status(404).json({
                message: "User not found.",
                code: "NOT_FOUND_ERROR",
            });
        }

        if (find) {
            find.name = req.body.name || find.name;
            find.email 
            find.password = req.body.password || find.password;
            find.birthday = req.body.birthday || find.birthday;
            find.city = req.body.city || find.city;
            find.country = req.body.country || find.country;
        }



        const savedUser = await find.save();
        return res.status(200).json({
            message: " User updated successfully",
            savedUser,
        });
    } catch (err) {

        console.log(err);
        return res.status(500).json({
            message: "Internal error.",
            code: "INTERNAL_SERVER_ERROR",
        });

    }
}

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
    updateUserById,
    deleteById,
};