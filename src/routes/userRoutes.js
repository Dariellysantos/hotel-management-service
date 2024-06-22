const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.post("/", controller.createUser);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);


module.exports = router;