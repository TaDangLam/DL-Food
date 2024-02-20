import mongoose from 'mongoose';

const statusProduct = ['Stock', 'SoldOut'];
const optionSizes = ['Small', 'Medium', 'Big'];

const ProductSchema = new mongoose.Schema ({
    options: {type: mongoose.Schema.Types.ObjectId, ref: 'Option'},
    images: {type: Array},
    categories: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    review: {type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    title: {type: String, required: true},
    desc: {type: String},
    status: {type: String, enum: statusProduct, default: 'Stock'}
}, {
    timestamps: true
})

export const Product = mongoose.model('Product', ProductSchema);
