import { StatusCodes} from 'http-status-codes';
import mongoose from 'mongoose';

import productService from '../service/productService.js';

const productController = {
    getAllProduct: async(req, res) => {
        try {
            const response = await productService.getAllProduct();
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    getDetailProduct: async(req, res) => {
        try {
            const { pid } = req.params;
            const response = await productService.getDetailProduct(pid);
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    getProductByCategory: async(req, res) => {
        try {
            const { cid } = req.params;
            const response = await productService.getProductByCategory(cid);
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    createProduct: async(req, res) => {
        try {
            const { name, price, title, desc, categoryId, options, images } = req.body;
            if( !name || !price || !title || !desc || !categoryId || !options || images.length === 0){
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please input all required fields and upload at least one image' });
            }
            const response = await productService.createProduct(req.body);
            return res.status(StatusCodes.CREATED).json(response);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    updateProduct: async(req, res) => {
        try {
            const { pid } = req.params;
            const newData = req.body;
            const updateProduct = await productService.updateProduct(pid, newData);
            res.status(StatusCodes.OK).json(updateProduct)
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    deleteProduct: async(req, res) => {
        try {
            const { pid } = req.params;
            const response = await productService.deleteProduct(pid);
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    }
}

export default productController;
