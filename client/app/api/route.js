import axios from "axios";

import { setCategory } from "@/lib/features/category/categorySlice";
import { setProductByCategory, setAllProductByCategory } from "@/lib/features/product/productSlice";

const baseUrl = process.env.NEXT_PUBLIC_API_BACKEND;

export const fetchAllCategory = async(dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/category`);
        dispatch(setCategory(response.data.data));
    } catch (error) {
        console.log('Error fetching product data: ', error);
        throw error;
    }
}

export const createCategory = async() => {
    try {
        const response = await axios.post(`${baseUrl}/category/add-cate`);
        return response.data;
    } catch (error) {
        console.log('Error fetching product data: ', error);
        throw error;
    }
}

export const updateCategory = async(cid) => {
    try {
        const response = await axios.patch(`${baseUrl}/category/update-cate/${cid}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching product data: ', error);
        throw error;
    }
}

export const deleteCategory = async(cid) => {
    try {
        const response = await axios.delete(`${baseUrl}/category/delete-cate/${cid}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching product data: ', error);
        throw error;
    }
}

export const getProductCategory = async(cid, dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/product/getFew-product-cate/${cid}`);
        dispatch(setProductByCategory(response.data.data));
    } catch (error) {
        console.log('Error fetching product data: ', error);
        throw error;
    }
}

export const getAllProductByCategory = async(cid, dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/product/getAll-product-cate/${cid}`);
        dispatch(setAllProductByCategory(response.data.data));
    } catch (error) {
        console.log('Error fetching product data: ', error);
        throw error;
    }
}
