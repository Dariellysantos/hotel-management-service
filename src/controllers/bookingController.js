const mongoose = require("mongoose");
const BookingSchema = require("../models/bookingSchema");

const createBooking = async (req, res) => {
    try {
        const newBooking = new BookingSchema({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            emailClient: req.body.emailClient,
            roomNumber: req.body.roomNumber,
            amountToPay: req.body.amountToPay,
            dateOfStay: req.body.dateOfStay,
            status: req.body.status,
        });

        const sevedBooking = await newBooking.save();
        
        return res.status(201).json({
            message: "Booking registered successfully!",
            sevedBooking
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal error.",
            code: "INTERNAL_SERVER_ERROR",
        });
    }
};


module.exports = {
    createBooking,
};