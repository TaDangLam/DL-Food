import mongoose from 'mongoose';

const statusOrder = ['Pending', 'Processing', 'Delivered'];

const OrderSchema = new mongoose.Schema ({
    orderBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    paymentType: {type: mongoose.Schema.Types.ObjectId, ref: 'Payment'},
    totalPrice: {type: String, required: true},
    status: {type: String, enum: statusOrder, default: 'Pending'},
    orderDetail: [
        {
            _id: false,
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
            quantity: { type: Number, required: true },
            totalPriceProduct: { type: String, required: true },
        }
    ],
    address: {type: mongoose.Schema.Types.ObjectId, ref: 'Address'}
}, {
    timestamps: true
})

export const Order = mongoose.model('Order', OrderSchema);
