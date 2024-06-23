const express = require("express");
const router = express.Router();

const controller = require("../controllers/bookingController");

router.post("/", controller.createBooking);
router.get("/bookingList", controller.bookingListByDate);
router.put("/:id", controller.updateStatus);


module.exports = router;