import express from 'express';
import Users from '../models/Users';
import Events from '../models/Events';
import MessageResponse from '../interfaces/MessageResponse';
import { ParamsDictionary } from 'express-serve-static-core';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API',
    data: null,
  });
});

router.get<{}, MessageResponse>('/emojis', (req, res) => {
  res.json({
    message:  '😀,😳,🙄',
    data: null,
  });
});


//Test Route Find One
router.get<ParamsDictionary, MessageResponse>('/users/:id', async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      res.json({ message: 'User found', data: user });
    } else {
      res.status(404).json({ message: 'User not found', data: null });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', data: null });
  }
});

//Test Find All
//Not working
router.get<{}, MessageResponse>('/users/all', async (req, res) => {
  try {
    const allUsers = await Users.findAll();
    if (allUsers) {
      res.json({ message: 'Users found', data: allUsers });
    } else {
      res.status(404).json({ message: 'User not found', data: null });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', data: { error } });
    console.error(error);
  } 
});

//Test Route Create
router.post<{}, MessageResponse>('/users/create', async (req, res) => {
  const { first_Name, last_Name, email, auth_key } = req.body;
  
  try {
    const newUser = await Users.create({
      first_name: first_Name,
      last_name: last_Name,
      email: email,
      auth_key: auth_key,
    });
    if (newUser) {
      res.json({ message: 'User created', data: newUser });
    } else {
      res.status(404).json({ message: 'User not created', data: null });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error', data: null });
  }
});


//Test Route to Find One Event
router.get<ParamsDictionary, MessageResponse>('/events/:id', async (req, res) => {
  try {
    const event = await Events.findByPk(req.params.id);
    if (event) {
      res.json({ message: 'Event found', data: event });
    } else {
      res.status(404).json({ message: 'Event not found', data: null });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', data: null });
  }
});

//Test Route to Find All Events
//Not working
router.get<{}, MessageResponse>('/events/all', async (req, res) => {
  try {
    const allEvents = await Events.findAll();
    if (allEvents) {
      res.json({ message: 'Events found', data: allEvents });
    } else {
      res.status(404).json({ message: 'Events not found', data: null });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', data: null });
  }
});

//Test Route to Create new Event
router.post<{}, MessageResponse>('/events/create', async (req, res) => {
  const { name, short_description, long_description, city, state, country, address, start_time, end_time, host } = req.body;
  // Need a way to grab the user id from the session. That will be host. 
   try{
    const newEvent = await Events.create({
      name: name,
      short_description: short_description,
      long_description: long_description,
      city: city,
      state: state,
      country: country,
      address: address,
      start_time: start_time,
      end_time: end_time,
      host: host,
    });
  
    if (newEvent) {
      res.json({ message: 'Event created', data: newEvent });
    } else {
      res.status(404).json({ message: 'Event not created', data: null });
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error', data: null });
  }
});

export default router;
