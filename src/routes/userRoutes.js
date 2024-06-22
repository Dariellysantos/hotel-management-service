const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.post("/user", controller.createUser);
router.get("/user", controller.getAll);


module.exports = router;