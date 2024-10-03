const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect("mongodb+srv://Anubhavsingh:Ajit197629@cluster0.ksrwp4w.mongodb.net/paytm")
    .then(() => console.log("DB connected successfully"))
    .catch(() => console.log("DB connection failed"));
};

module.exports = dbConnect;
