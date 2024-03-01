import mongoose from 'mongoose';

const statusOrder = ['Pending', 'Processing', 'Delivered'];

const OrderSchema = new mongoose.Schema ({
    orderBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    paymentType: {type: mongoose.Schema.Types.ObjectId, ref: 'Payment'},
    totalPrice: {type: String, required: true},
    status: {type: String, enum: statusOrder, default: 'Pending'},
    orderDetail: {type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetail'},
    address: {type: mongoose.Schema.Types.ObjectId, ref: 'Address'}
}, {
    timestamps: true
})

export const Order = mongoose.model('Order', OrderSchema);
