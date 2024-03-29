import express from 'express';
const Router = express.Router();

import OrderController from '../controllers/OrderController.js';
import authMiddleWare from '../middleware/authMiddleware.js'

Router.get('/get-all-order', authMiddleWare.verifyTokenAdmin, OrderController.getAllOrder);
Router.get('/get-all-order-user', authMiddleWare.verifyCustomer, OrderController.getAllOrderForUser);
Router.get('/processing', authMiddleWare.verifyTokenAdmin, OrderController.getAllProcessingOrder);
Router.get('/delivered', authMiddleWare.verifyTokenAdmin, OrderController.getAllDeliveredOrder);
Router.get('/cancelled', authMiddleWare.verifyTokenAdmin, OrderController.getAllCancelledOrder);
Router.post('/create-order', authMiddleWare.verifyCustomer, OrderController.createOrder);
Router.get('/get-detail-order/:oid', authMiddleWare.verifyCustomer, OrderController.getDetailOrder);
Router.patch('/update-to-processing/:oid', authMiddleWare.verifyTokenStaff, OrderController.updateStatusToProcessing);
Router.patch('/update-to-delivered/:oid', authMiddleWare.verifyTokenStaff, OrderController.updateStatusToDeliverd);
Router.patch('/update-to-cancel/:oid', authMiddleWare.verifyTokenStaff, OrderController.updateStatusToCancel);
Router.patch('/update-order/:oid', authMiddleWare.verifyCustomer, OrderController.updateOrder);
Router.delete('/delete-order/:oid', authMiddleWare.verifyTokenStaff, OrderController.deleteOrder)

export const OrderRoute = Router;
