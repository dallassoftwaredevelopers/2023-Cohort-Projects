require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

// create express app server
const app = express();
app.use(cors())


// assign a piece of middleware that will fire anytime a request comes in to the server
app.use(express.json());
app.use((req, res, next) => {
    // log out the path every time we get a request for testing
    console.log(req.path, req.method);
    next();
});

// grabs all of the different routes that are attached to the express router in the routes.js file 
app.use('/api', routes); 


//connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    // listen for requests - PORT defined in .env file
    app.listen(process.env.PORT, () => {
        console.log(`🚀 Connected to DB & server ready at http://localhost:${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
})
