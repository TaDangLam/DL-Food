import express from 'express';
const Router = express.Router();

import OrderController from '../controllers/OrderController.js';
import authMiddleWare from '../middleware/authMiddleware.js'

Router.get('/get-all-order', authMiddleWare, OrderController.getAllOrder);
Router.post('/create-order', authMiddleWare, OrderController.createOrder);
Router.get('/get-order-detail', authMiddleWare, OrderController.getAllOrder);

export const OrderRoute = Router;
