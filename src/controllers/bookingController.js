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

const bookingListByDate = async (req, res) => {
    const body = req.body;

    try {
    const booking = await BookingSchema.find();

    
    let list = booking.filter(function (i) {
        return i.dateOfStay[0] >= body.checkin && i.dateOfStay[1] <= body.checkout
    })

    if (list.length === 0) {
        return res.status(404).json({
            message: "bookings not found.",
            code: "NOT_FOUND_ERROR",
            data: null,
        });
    }

    return res.status(200).json({
        message: list,
        code: "SUCCESS",
    });

    } 
    catch (err) {
      return res.status(500).json({
        message: "Internal error.",
        code: "INTERNAL_SERVER_ERROR",
        data: null,
      });
    }
};

module.exports = {
    createBooking,
    bookingListByDate,
};