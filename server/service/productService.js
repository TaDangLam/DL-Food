import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import middlewareToken from "./jwtService.js";
import { Product } from '../model/productModel.js';


const productService = {
    getAllProduct: async() => {
        try {
            const allProduct = await Product.find();
            console.log(allProduct)
            return allProduct;
        } catch (err) {
            throw err
        }
    },
    createProduct: async(newProduct) => {
        try {
            const { name, price, title, desc, status } = newProduct;
        } catch (err) {
            throw err;
        }
    }
};

export default productService;
