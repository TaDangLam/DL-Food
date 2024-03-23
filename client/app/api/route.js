import axios from "axios";

import { setCategory } from "@/lib/features/category/categorySlice";
import { setProductByCategory, setAllProductByCategory, setAllProductById } from "@/lib/features/product/productSlice";
import { Login, Logout, Register, UpdateUser, addNewAddress, updateAddress, deleteAddress } from '@/lib/features/user/authSlice'

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



// ---------------------------- User (Be careful response.data.data) -----------------------------
export const login = async(username, password, dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/user/login`, {
            name: username,
            password: password
        });
        const { data, accessToken, refreshToken } = response.data;
        dispatch(Login({ data, accessToken, refreshToken }));
    } catch (error) {
        console.log('Login error: ', error.response.data.error);
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

export const updateUser = async(updateUser, dispatch) => {
    try {
        const { email, password, repeatPassword, phone, accessToken, userID } = updateUser;
        const response = await axios.patch(`${baseUrl}/user/update-user/${userID}`, {
            email,
            password,
            confirmPassword: repeatPassword,
            phone
        }, {
            headers: {
                'token': `Bearer ${accessToken}`
            }
        });
        dispatch(UpdateUser(response.data.data));
    } catch (error) {
        console.log('Update User error: ', error.response.data.error);
        throw error;
    }
}

export const logout = (dispatch) => {
    dispatch(Logout());
}


// ---------------------------- Address  -----------------------------
export const addAddress = async(data, userId, accessToken, dispatch) => {
    try {
        const { street, city, province } = data;
        const response = await axios.post(`${baseUrl}/address/add-address/${userId}`, { street, city, province }, {headers: {'token': `Bearer ${accessToken}` }});
        dispatch(addNewAddress(response.data.data));
    } catch (error) {
        console.log('Update Address error: ', error.response.data.error);
        throw error;
    }
}

export const updateAddr = async(data, addressId, accessToken, dispatch) => {
    try {
        const { street, city, province } = data;
        const response = await axios.patch(`${baseUrl}/address/update-address/${addressId}`, { street, city, province }, {headers: {'token': `Bearer ${accessToken}` }});
        dispatch(updateAddress(response.data.data));
    } catch (error) {
        console.log('Update Address error: ', error.response.data.error);
        throw error;
    }
}

export const removeAddress = async(addressId, accessToken, dispatch) => {
    try {
        const response = await axios.delete(`${baseUrl}/address/delete-address/${addressId}`, {headers: {'token': `Bearer ${accessToken}` }});
        dispatch(deleteAddress(addressId));
        // console.log(response.data.message);
    } catch (error) {
        console.log('Update Address error: ', error.response.data.error);
        throw error;
    }
}


// ---------------------------- Order  -----------------------------
export const createOrder = async(data, accessToken) => {
    try {
        const { orderBy, paymentType, totalPrice, orderDetail, address, isPaid } = data
        const response = await axios.post(`${baseUrl}/order/create-order`, 
        { orderBy, paymentType, totalPrice, orderDetail, address, isPaid }, 
        {headers: {'token': `Bearer ${accessToken}` }});
        return(response.data.data);
    } catch (error) {
        console.log('Update Address error: ', error.response.data.error);
        throw error;
    }
}