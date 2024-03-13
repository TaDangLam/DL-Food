import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BACKEND;

export const fetchAllCategory = async() => {
    try {
        const response = await axios.get(`${baseUrl}/category`);
        return response.data;
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

export const getProductCategory = async(cid) => {
    try {
        const response = await axios.get(`${baseUrl}/product/getFew-product-cate/${cid}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching product data: ', error);
        throw error;
    }
}
