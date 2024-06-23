const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  emailClient: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
  amountToPay: {
    type: Number,
    required: true,
  },
  dateOfStay: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  deletedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("booking", bookingSchema);