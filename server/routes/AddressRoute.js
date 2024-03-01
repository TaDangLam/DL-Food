import express from 'express';
const Router = express.Router();

import authMiddleWare from '../middleware/authMiddleware.js'
import AddressController from '../controllers/AddressController.js';

Router.get('/', authMiddleWare, AddressController.getAllAddress);
Router.post('/add-address', authMiddleWare, AddressController.addAddress);
Router.patch('/update-address', authMiddleWare, AddressController.updateAddress);
Router.delete('/delete-address', authMiddleWare, AddressController.deleteAddress);
Router.get('/get-detail/:aid', authMiddleWare, AddressController.getDetailAddress);

export const AddressRoute = Router;
