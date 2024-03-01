import { StatusCodes} from 'http-status-codes';
import orderService from '../service/orderService.js';

const OrderController = {
    getAllOrder: async(req, res) => {
        try {
            const response = await orderService.getAllOrder();
            res.status(StatusCodes.OK).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    createOrder: async(req, res) => {
        try {
            const { orderBy, paymentType, totalPrice, orderDetail, address } = req.body;
            if (!orderBy || !paymentType || !totalPrice || !orderDetail || !address) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please provide all required fields.' });
            }
            const newOrder = await orderService.createOrder(req.body);
            res.status(StatusCodes.CREATED).json(newOrder)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }
}

export default OrderController;
