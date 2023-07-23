import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import sequelize from './config/connection';
import { ParamsDictionary } from 'express-serve-static-core';
import Users from './models/Users';

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

//Test Find All
app.get<{}, MessageResponse>('/users/all', async (req, res) => {
  try {
    const response = await Users.findAll();
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

//Test Route Create
app.post<{}, MessageResponse>('/users/create', async (req, res) => {
  const {firstName, lastName, email, auth_key} = req.body;
  try {
    const response = await Users.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      auth_key: auth_key,
    });
    if (response) {
      res.json({ message: 'User created', data: response });
    } else {
      res.status(404).json({ message: 'User not created', data: null });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', data: null });
  }
});


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    let randomGen = Math.random().toString(36).substring(7)
    const response = await Users.create({
      first_name: randomGen,
      last_name: randomGen,
      email: randomGen + '@example.com',
      auth_key: randomGen,
    });
    if (response) {
      console.log({message: 'User created', data: response});
    } else {
      console.log({message: 'User not created', data: null});
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};



testConnection();

//Test Route Find All




export default app;
