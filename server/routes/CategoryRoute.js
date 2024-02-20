import express from 'express';
const Router = express.Router();

import authMiddleWare from '../middleware/authMiddleware.js'
import CategoryController from '../controllers/CategoryController.js';

Router.get('/', CategoryController.getAllCategory);
Router.post('/add-cate', authMiddleWare, CategoryController.addCategory);
Router.patch('/update-cate/:cid', authMiddleWare, CategoryController.updateCategory);
Router.delete('/delete-cate/:cid', authMiddleWare,  CategoryController.deleteCategory);

export const CategoryRoute = Router;
