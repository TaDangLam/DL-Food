import express from 'express';
const Router = express.Router();

import userController from '../controllers/UserController.js';
import authMiddleWare from '../middleware/authMiddleware.js'

Router.get('/getAll', authMiddleWare.verifyTokenAdmin, userController.getAllUser);
Router.get('/get-all-staff', authMiddleWare.verifyTokenAdmin, userController.getAllStaff);
Router.post('/register', userController.register);
Router.post('/login', userController.loginUser);
Router.post('/refresh-token', authMiddleWare.verifyCustomer, userController.refreshToken);
Router.get('/get-detail-user/:id', authMiddleWare.verifyCustomer, userController.getDetailUser);
Router.patch('/update-user/:id', authMiddleWare.verifyCustomer, userController.updateUser);
Router.delete('/delete-user/:id', authMiddleWare.verifyTokenAdmin, userController.deleteUser);

export const UserRoute = Router;
