const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to the root URL of our Server!");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running successfully. Listening on PORT: ${PORT}`);
  } else {
    console.log("Error occurred. Server failed to start.", error);
  }
});
