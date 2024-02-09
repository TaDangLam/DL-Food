import mongoose from 'mongoose';

const OrderDetailSchema = new mongoose.Schema ({
    order: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1},
        price: { type: Number, required: true},
    }]
}, {
    timestamps: true
})

export const OrderDetail = mongoose.model('OrderDetail', OrderDetailSchema);
