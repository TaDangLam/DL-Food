import express from 'express';
const Router = express.Router();

import authMiddleWare from '../middleware/authMiddleware.js'
import imagesController from '../controllers/ImagesController.js';
import uploadCloud from '../configs/cloundinaryConfig.js';

Router.post('/upload', authMiddleWare, uploadCloud.array('img', 10), imagesController.uploadImages);

export const ImagesRoute = Router;
