const express = require("express");
const user = require("./routes/user");
const cookieParser = require("cookie-parser")

const app = express();

require("dotenv").config({ path: "config/.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()) 


app.use("/api/v1", user);

module.exports = app;
