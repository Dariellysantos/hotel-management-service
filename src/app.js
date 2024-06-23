
const express = require("express");
const cors = require("cors");

require("dotenv").config();
const db = require("./database/mongoConfig");


const userRoutes = require("./routes/userRoutes");
const loginRouter = require("./routes/loginRouter");
const bookingRouter = require("./routes/bookingRouter");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/login", loginRouter);
app.use("/booking", bookingRouter);



db.connect();

module.exports = app;