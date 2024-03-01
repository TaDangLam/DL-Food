import { Order } from '../model/orderModel.js';

const orderService = {
    getAllOrder: async() => {
        try {
            const order = await Order.find();
            return ({
                status: 'OK',
                data: order,
            })
        } catch (error) {
            throw new Error(error.message);;
        }
    },
    createOrder: async(orderData) => {
        try {
            const { orderBy, paymentType, totalPrice, orderDetail, address } = newOrder;
            const newOrder = await Order.create({ orderBy, paymentType, totalPrice, orderDetail, address });
            return ({
                message: 'Create Order is success',
                status: 'OK',
                data: newOrder
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default orderService;
