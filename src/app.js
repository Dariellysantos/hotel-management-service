
const express = require("express");
const cors = require("cors");

require("dotenv").config();
const db = require("./database/mongoConfig");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/hotelManagement", userRoutes);

db.connect();

module.exports = app;