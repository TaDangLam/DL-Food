import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cloudinary from 'cloudinary';

import middlewareToken from "./jwtService.js";
import { Product } from '../model/productModel.js';
import uploadCloud from '../configs/cloundinaryConfig.js';

const productService = {
    getAllProduct: async() => {
        try {
            const allProduct = await Product.find();
            console.log(allProduct)
            return {
                status: 'OK',
                message: 'Get All Product is Success',
                data: allProduct
            }
        } catch (err) {
            throw err
        }
    },
    getDetailProduct: async(pid) => {
        try {
            const product = await Product.findById(pid);
            return ({
                status: 'OK',
                data: product
            })
        } catch (err) {
            throw err;
        }
    },
    createProduct: async(newProduct, images) => {
        try {
            const { name, price, title, desc, categoryId, options } = newProduct;
            const product = await Product.create({
                name,
                price,
                title,
                desc,
                images: [], 
                categoryId, 
                options
            })

            // Upload các ảnh lên Cloudinary và lưu URL vào sản phẩm
            const uploadedImages = await Promise.all(images.map(async (image) => {
                const result = await cloudinary.v2.uploader.upload(image);
                return result.secure_url;
            }));

            // Cập nhật URL của ảnh vào sản phẩm và lưu vào database
            product.images = uploadedImages;
            await product.save();
            return {
                status: 'OK',
                message: 'Product is create Successfully',
                data: product
            };
        } catch (err) {
            throw err;
        }
    },
    deleteProduct: async(pid) => {
        try {
            await Product.findByIdAndDelete(pid);
            return({
                status: 'OK',
                message: 'Deleted Product is successfully',
            });
        } catch (err) {
            throw err;
        }
    },
    updateProduct: async(pid, newData) => {
        console.log(pid);
        const { name, price, title, desc, categoryId, options, images } = newData;
        const product = await Product.findById(pid);
        if(!product) {
            return ({ message : 'Product is not found'});
        }
        product.name = name || product.name;
        product.price = price || product.price;
        product.title = title || product.title;
        product.desc = desc || product.desc;
        product.categoryId = categoryId || product.categoryId;
        product.options = options || product.options;
        
        if (images && images.length > 0) {
            const uploadedImages = await Promise.all(images.map(async (image) => {
                const result = await cloudinary.v2.uploader.upload(image);
                return result.secure_url;
            }));
            product.images = uploadedImages;
        }
        return await product.save();
    }
};

export default productService;
