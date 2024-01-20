import express from 'express';
const Router = express.Router();

import userController from '../controllers/UserController.js';

Router.post('/register', userController.createUser)

export const UserRoute = Router;