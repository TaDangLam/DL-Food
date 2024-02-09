import express from 'express';
const Router = express.Router();

import productController from '../controllers/ProductController.js';
import authMiddleWare from '../middleware/authMiddleware.js'

Router.get('/', productController.getAllProduct);
Router.post('/add-product', productController.createProduct);

export const ProductRoute = Router;
