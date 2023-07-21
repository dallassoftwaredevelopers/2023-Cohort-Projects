import express from 'express';
import User from '../models/User';
import MessageResponse from '../interfaces/MessageResponse';
import { ParamsDictionary } from 'express-serve-static-core';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API',
    data: null
  });
});


//Test Route Find One
router.get<ParamsDictionary, MessageResponse>('/users/:id', async (req, res) => {
  try {
    const response = await User.findByPk(req.params.id);
    if (response) {
      res.json({ message: 'User found', data: response });
    } else {
      res.status(404).json({ message: 'User not found', data: null });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', data: null });
  }
});

//Test Route Find All
router.get<ParamsDictionary, MessageResponse>('/users/all', async (req, res) => {
  console.log('We are at the top of the /users/all route');
  try {
    const response = await User.findAll();
    if (response) {
      res.json({ message: 'Users found', data: response });
    } else {
      res.status(404).json({ message: 'User not found', data: null });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', data: null });
    console.log(error);
  } 
});


export default router;
