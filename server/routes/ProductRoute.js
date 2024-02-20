import express from 'express';
const Router = express.Router();

import productController from '../controllers/ProductController.js';
import authMiddleWare from '../middleware/authMiddleware.js'
import uploadCloud from '../configs/cloundinaryConfig.js';

Router.get('/', productController.getAllProduct);
Router.post('/add-product', authMiddleWare, uploadCloud.array('images', 10), productController.createProduct);
Router.post('/upload', authMiddleWare, uploadCloud.array('img', 10), productController.uploadImages)
Router.get('/get-detail/:pid', productController.getDetailProduct);
Router.patch('/update-product/:pid', authMiddleWare,  uploadCloud.array('images', 10), productController.updateProduct)
Router.delete('/delete-product/:pid', authMiddleWare, productController.deleteProduct);

export const ProductRoute = Router;
