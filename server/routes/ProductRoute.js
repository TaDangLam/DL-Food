import express from 'express';
const Router = express.Router();

import productController from '../controllers/ProductController.js';
import authMiddleWare from '../middleware/authMiddleware.js'
import upload from '../configs/multerConfig.js';

Router.get('/', productController.getAllProduct);
Router.post('/add-product', authMiddleWare.verifyTokenAdmin, upload.any(), productController.createProduct);
Router.get('/get-detail/:pid', productController.getDetailProduct);
Router.get('/get-product-cate/:cid', productController.getProductByCategory);
Router.patch('/update-product/:pid', authMiddleWare.verifyTokenAdmin, upload.any(), productController.updateProduct);
Router.delete('/delete-product/:pid', authMiddleWare.verifyTokenAdmin, productController.deleteProduct);

export const ProductRoute = Router;
