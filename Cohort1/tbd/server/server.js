require("dotenv").config();
const express = require('express');

const app = express();

// this will be removed once the endpoints are being created
// it is just with the initial creation of the express app to test that it is running
app.get('/', function (req, res) {
    res.send('<h1>server is running</h1>');
});

// use the port from .env, if it is there
const PORT =  process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Express app is running on port: ${PORT}`);    
})
