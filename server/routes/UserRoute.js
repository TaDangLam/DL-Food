import express from 'express';
const Router = express.Router();

import userController from '../controllers/UserController.js';
import authMiddleWare from '../middleware/authMiddleware.js'

Router.get('/getAll', authMiddleWare, userController.getAllUser);
Router.post('/register', userController.createUser);
Router.post('/login', userController.loginUser);
Router.post('/refresh-token', userController.refreshToken);
Router.get('/get-detail-user/:id', authMiddleWare, userController.getDetailUser);
Router.patch('/update-user/:id', userController.updateUser);
Router.delete('/delete-user/:id', authMiddleWare, userController.deleteUser);

export const UserRoute = Router;
