const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

app.use(helmet());
app.use(cors());

console.log(process.env.TEST);

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World!");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running successfully. Listening on PORT: ${PORT}.`);
  } else {
    console.log("Error occurred. Server failed to start.", error);
  }
});
