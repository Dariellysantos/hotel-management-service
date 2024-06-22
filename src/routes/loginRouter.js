const express = require("express");
const loginRouter = express.Router();

const loginController = require("../controllers/longinController");

loginRouter.post("/", loginController.createLogin);

module.exports = loginRouter;