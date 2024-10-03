const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect("MONGODB_URL")
    .then(() => console.log("DB connected successfully"))
    .catch(() => console.log("DB connection failed"));
};

module.exports = dbConnect;
