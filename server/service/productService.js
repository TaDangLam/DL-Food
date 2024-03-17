import path from 'path';
import fs from 'fs';

import { Product } from '../model/productModel.js';

const productService = {
    getAllProduct: async(limit , page ) => {
        try {
            const totalProduct = await Product.countDocuments();
            const allProduct = await Product.find().limit(limit).skip(page * limit);    // default maybe page = 0
            return {
                status: 'OK',
                message: 'Get All Product is Success',
                data: allProduct,
                totalProduct: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit),
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },
    searchProduct: async(keyword) => {
        try {
            const products = await Product.find({
                $or: [
                    { name: { $regex: keyword, $options: 'i' } },
                    { title: { $regex: keyword, $options: 'i' } },
                    { desc: { $regex: keyword, $options: 'i' } }
                ]
            }).populate('categoryId')
              .populate('reviewId');
            return({
                status: 'OK',
                data: products
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getDetailProduct: async(pid) => {
        try {
            const product = await Product.findById(pid)
                .populate('categoryId')
                .populate({
                    path: 'reviewId',
                    populate: {
                        path: 'userID',
                        model: 'User'
                    }
                })
            return ({
                status: 'OK',
                data: product
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getProductByCategory: async(cid) => {
        try {
            const products = await Product.find({ categoryId: cid })
                                                .populate('categoryId')
                                                .populate('reviewId');
            return ({
                status: 'OK',
                data: products
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getFewProductByCategory: async(cid) => {
        try {
            const products = await Product.find({ categoryId: cid })
                                                .limit(4)
                                                .populate('categoryId')
                                                .populate('reviewId');
            return ({
                status: 'OK',
                data: products
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    createProduct: async(newProduct) => {
        try {
            const { name, price, title, desc, categoryId, options, images } = newProduct;
            const product = await Product.create({ name, price, title, desc, categoryId,  options, images: images || [] });
            await product.save();
            return {
                status: 'OK',
                message: 'Product is create Successfully',
                data: product
            };
        } catch (error) {
            throw new Error(error.message);
        }
    },
    updateProduct: async(pid, newData) => {
        try {
            const { name, price, title, desc, categoryId, options, images } = newData;
            const product = await Product.findById(pid);
            if(!product) {
                return ({ message : 'Product is not found'});
            }

            // Check và lọc ảnh
            const existingImages = product.images || [];                                                                       // ảnh trong database
            const filterImages = Array.isArray(images) ? images.filter(newImg => !product.images.includes(newImg)) : [];      // ảnh trong req.body
            
            // Cập nhật thông tin sản phẩm
            product.name = name || product.name;
            product.price = price || product.price;
            product.title = title || product.title;
            product.desc = desc || product.desc;
            product.categoryId = categoryId || product.categoryId;
            product.options = options || product.options;
            product.images.push(...filterImages);

            await product.save()
            return ({
                status: 'OK',
                message: 'Updated Product is Success',
                data: product
            })
        } catch (error) {
            throw new Error(error.message);
        }
    },
    updateStatusProduct: async(pid) => {
        try {
            const product = await Product.findById(pid);
            if(!product){
                throw new Error('Product is not found');
            }
            product.status = (product.status === 'Stock') ? 'SoldOut' : 'Stock';
            await product.save();
            return ({
                status: 'OK',
                message: 'Updated Product Status Successfully',
                data: product
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    deleteProduct: async(pid) => {
        try {
            const product = await Product.findById(pid);
            if (!product) {
                throw new Error('Product not found');
            }
            await Product.findByIdAndDelete(pid);
            const uploadPath = path.join('./public/uploads/', product.name);
            if(fs.existsSync(uploadPath)) fs.rmSync(uploadPath, { recursive: true });
            return({
                status: 'OK',
                message: 'Deleted Product is successfully',
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default productService;
