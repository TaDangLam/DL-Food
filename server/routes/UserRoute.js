import express from 'express';
const Router = express.Router();

import userController from '../controllers/UserController.js';

// Router.get('/', userController.test)
Router.post('/register', userController.createUser);
Router.post('/login', userController.loginUser);

export const UserRoute = Router;