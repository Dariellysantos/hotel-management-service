const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.post("/", controller.createUser);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.patch("/:id",controller.updateUserById);
router.delete("/:id", controller.deleteById);


module.exports = router;