import { StatusCodes} from 'http-status-codes';
import bcrypt from 'bcrypt';

import productService from '../service/productService.js';

const productController = {
    getAllProduct: async(req, res) => {
        try {
            const response = await productService.getAllProduct();
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json(err);
        }
    },
    getDetailProduct: async(req, res) => {

    },
    createProduct: async(req, res) => {
        try {
            const { name, price, title, desc, status, images, categoryId, options } = req.body;
            if( !name || !price || !title || !desc || !status || !images || !categoryId || !options ){
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please input all required fields' });
            }
            console.log(req.body);
            const response = productService.createProduct(req.body);
            return res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json(err);
        }
    },
    updateProduct: async(req, res) => {

    },
    deleteProduct: async(req, res) => {

    },
}

export default productController;
