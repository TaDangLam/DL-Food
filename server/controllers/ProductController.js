import { StatusCodes} from 'http-status-codes';
import bcrypt from 'bcrypt';

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
    createProduct: async(req, res) => {
        try {
            const { name, price, title, desc, categoryId, options } = req.body;
            const images = req.files.map(file => file.path);
            // console.log(images)
            if( !name || !price || !title || !desc || !categoryId || !options || images.length === 0){
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please input all required fields and upload at least one image' });
            }
            const response = await productService.createProduct(req.body, images);
            return res.status(StatusCodes.CREATED).json(response);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    updateProduct: async(req, res) => {
        try {
            const { pid } = req.params;
            const { name, price, title, desc, categoryId, options } = req.body;
            const images = req.files.map(file => file.path);
            const updateProduct = await productService.updateProduct(pid, { name, price, title, desc, categoryId, options, images });
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
    },
    uploadImages: async(req, res) => {
        try {
            const uploadImage = req.files.map(file => file.path);
            console.log(uploadImage);
            res.status(StatusCodes.OK).json(uploadImage);
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    }
}

export default productController;
