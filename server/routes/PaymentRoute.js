import express from 'express';
const Router = express.Router();

import PaymentController from '../controllers/PaymentController.js';
import authMiddleWare from '../middleware/authMiddleware.js';

Router.get('/', authMiddleWare, PaymentController.getAllPayments);
Router.post('/create-payment', authMiddleWare, PaymentController.createPayment);
Router.get('/get-detail/:paymentId', authMiddleWare, PaymentController.getPaymentById);
Router.patch('/update-payment/:paymentId', authMiddleWare, PaymentController.updatePayment);
Router.delete('/delete-payment/:paymentId', authMiddleWare, PaymentController.deletePayment);

export const PaymentRoute = Router;
