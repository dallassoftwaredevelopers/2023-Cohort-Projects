require("dotenv").config();
const express = require('express');
// use the port from .env, if it is there
const PORT =  process.env.PORT || 3001;
// create the express app
const app = express();

const mongoose = require('mongoose');

// useNewUrlParser: true,
// useUnifiedTopology: true
// fix deprecation warnings
  mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
  })

// this will be removed once the endpoints are being created
// it is just with the initial creation of the express app to test that it is running
app.get('/', function (req, res) {
    res.send('<h1>server is running</h1>');
});


app.listen(PORT, () => {
    console.log(`Express app is running on port: ${PORT}`);    
})
