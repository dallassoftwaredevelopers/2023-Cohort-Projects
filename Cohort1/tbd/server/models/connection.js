require("dotenv").config();
const mongoose = require("mongoose");

// definining connection url and configuration parameters for mongodb connection
const DATABASE_URL = process.env.MONGO_URI;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish connection
mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;