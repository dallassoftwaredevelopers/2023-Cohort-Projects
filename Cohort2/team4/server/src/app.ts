import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
const sequelize = require('./config/connection');
import { ParamsDictionary } from 'express-serve-static-core';
import User from './models/User';

import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';
import { any } from 'zod';


require('dotenv').config();

const app = express();

app.use(morgan('dev')); 
app.use(helmet());
app.use(cors());
app.use(express.json());


app.use('/api/v1', api);

app.get<ParamsDictionary, MessageResponse>('/users/all', async (req, res) => {
  console.info('We are at the top of the /users/all route');
  try {
    const response = await User.findAll();
    if (response) {
      res.json({ message: 'Users found', data: response });
    } else {
      res.status(404).json({ message: 'User not found', data: null });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', data: {error} });
    console.error(error);
  } 
});


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

export default app;
