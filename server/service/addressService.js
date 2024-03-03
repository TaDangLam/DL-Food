import { Address } from '../model/addressModel.js'
import { User } from '../model/userModel.js';

const addressService = {
    getAllAddress: async(userId) => {
        try {
            const user = await User.findById(userId).populate('address');
            if(!user) {
                throw new Error('User not found');
            }
            return ({
                status: 'OK',
                data: user.address
            })
        } catch (error) {
            throw new Error(error.message);
        }
    },
    addAddress: async(userId, newAddress) => {
        try {
            const { street, city, province } = newAddress;
            const user = await User.findById(userId);
            if(!user){
                throw new Error('User not found');
            }
            const AddressData = await Address.create({ street, city, province });
            user.address.push(AddressData);
            await user.save();
            return ({
                status: 'OK',
                message: 'Add address is success',
                data: AddressData
            })
        } catch (error) {
            throw new Error(error.message);
        }
    },
    updateAddress: async(aid, Data) => {
        try {
            const { street, city, province } = Data;
            const oldAddress = await Address.findById(aid);
            if(!oldAddress){
                return({ message: 'Address is not found'});
            }
            const newAddress = await Address.findByIdAndUpdate(aid, 
                {   
                    street: street || oldAddress.street, 
                      city: city || oldAddress.city, 
                    province: province || oldAddress.province 
                },
                { new: true });
            return({
                status: 'OK',
                message: 'Update Address is Successs',
                data: newAddress
            })
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getDetailAddress: async(aid) => {
        try {
            const address = await Address.findById(aid);
            return({
                status: 'OK',
                data: address
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    deleteAddress: async(aid) => {
        try {
            await Address.findByIdAndDelete(aid);
            return ({
                status: 'OK',
                message: 'Address is Deleted Successfully'
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default addressService;
