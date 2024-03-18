import axios from "axios";

import { setCategory } from "@/lib/features/category/categorySlice";
import { setProductByCategory, setAllProductByCategory, setAllProductById } from "@/lib/features/product/productSlice";
import { Login, Logout, Register } from '@/lib/features/user/authSlice'

const baseUrl = process.env.NEXT_PUBLIC_API_BACKEND;

// ---------------------------- Category -----------------------------
export const fetchAllCategory = async(dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/category`);
        dispatch(setCategory(response.data.data));
    } catch (error) {
        console.log('Get All Category error : ', error);
        throw error;
    }
}

export const createCategory = async() => {
    try {
        const response = await axios.post(`${baseUrl}/category/add-cate`);
        return response.data;
    } catch (error) {
        console.log('Create Category error ', error);
        throw error;
    }
}

export const updateCategory = async(cid) => {
    try {
        const response = await axios.patch(`${baseUrl}/category/update-cate/${cid}`);
        return response.data;
    } catch (error) {
        console.log('Update Category error: ', error);
        throw error;
    }
}

export const deleteCategory = async(cid) => {
    try {
        const response = await axios.delete(`${baseUrl}/category/delete-cate/${cid}`);
        return response.data;
    } catch (error) {
        console.log('Delete Category: ', error);
        throw error;
    }
}

// ---------------------------- Product -----------------------------
export const getProductCategory = async(cid, dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/product/getFew-product-cate/${cid}`);
        dispatch(setProductByCategory(response.data.data));
    } catch (error) {
        console.log('Get Product Category: ', error);
        throw error;
    }
}

export const getAllProductByCategory = async(cid, dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/product/getAll-product-cate/${cid}`);
        dispatch(setAllProductByCategory(response.data.data));
    } catch (error) {
        console.log('Get All Product By Category error: ', error);
        throw error;
    }
}

export const getAllProductById = async(pid, dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/product/get-detail/${pid}`);
        dispatch(setAllProductById(response.data.data));
    } catch (error) {
        console.log('Get All Product By Id error: ', error);
        throw error;
    }
}

// ---------------------------- Review -----------------------------
export const getReviewById = async(id) => {
    try {
        const response = await axios.get(`${baseUrl}/review/get-detail/${id}`);
        return response.data.data;
    } catch (error) {
        console.log('Get Review Id error: ', error);
        throw error;
    }
}



// ---------------------------- User -----------------------------
export const login = async(username, password, dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/user/login`, {
            name: username,
            password: password
        });
        dispatch(Login(response.data.data));
    } catch (error) {
        console.log('Login error: ', error);
        throw error;
    }
}

export const register = async(newUser, dispatch) => {
    try {
        const { username, password, repeatPassword, email, phone } = newUser;
        const response = await axios.post(`${baseUrl}/user/register`, {
            name: username,
            email,
            password,
            confirmPassword: repeatPassword,
            phone
        });
        dispatch(Register(response.data.data));
    } catch (error) {
        console.log('Register error: ', error.response.data.error);
        throw error;
    }
}

export const logout = (dispatch) => {
    dispatch(Logout());
}