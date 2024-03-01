import { StatusCodes} from 'http-status-codes';

import addressService from '../service/addressService.js';

const AddressController = {
    getAllAddress: async(req, res) => {
        try {
            const response = await addressService.getAllAddress();
            res.status(StatusCodes.OK).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    addAddress: async(req, res) => {
        try {
            const { street, city, province } = req.body;
            if( !street || !city || !province ) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please input all required fields in Address' });
            }
            const response = await addressService.addAddress(req.body);
            res.status(StatusCodes.CREATED).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    updateAddress: async(req, res) => {
        try {
            const { aid } = req.params;
            const { street, city, province } = req.body;
            const response = await addressService.updateAddress(aid, req.body);
            res.status(StatusCodes.OK).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    getDetailAddress: async(req, res) => {
        try {
            const { aid } = req.params;
            const response = await addressService.getDetailAddress(aid);
            res.status(StatusCodes.OK).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    deleteAddress: async(req, res) => {
        try {
            const { aid } = req.params;
            const response = await addressService.deleteAddress(aid);
            res.status(StatusCodes.OK).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
}

export default AddressController;
