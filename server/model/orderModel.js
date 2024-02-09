import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema ({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    paymentType: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    total: {type: String, required: true},
    orderDetail: {type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetail'},
    address: {type: mongoose.Schema.Types.ObjectId, ref: 'Address'}
}, {
    timestamps: true
})

export const Order = mongoose.model('Order', OrderSchema);
