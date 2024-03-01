import { Address } from '../model/addressModel.js'

const addressService = {
    getAllAddress: async() => {
        try {
            const addressData = await Address.find();
            return ({
                status: 'OK',
                data: addressData
            })
        } catch (error) {
            throw new Error(error.message);
        }
    },
    addAddress: async(newAddress) => {
        try {
            const { street, city, province } = newAddress;
            const AddressData = await Address.create({ street, city, province });
            return ({
                status: 'OK',
                message: 'Add address is success',
                data: AddressData
            })
        } catch (error) {
            throw new Error(error.message);
        }
    },
    updateAddress: async() => {
        try {
            
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getDetailAddress: async() => {
        try {
            
        } catch (error) {
            throw new Error(error.message);
        }
    },
    deleteAddress: async() => {
        try {
            
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default addressService;
