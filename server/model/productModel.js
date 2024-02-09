import mongoose from 'mongoose';

const statusProduct = ['Stock', 'SoldOut'];
const optionSizes = ['Small', 'Medium', 'Big'];

const ProductSchema = new mongoose.Schema ({
    options: [{
        optionName: { type: String, required: true },
        optionSize: { type: String, enum: optionSizes, default: 'Small' },
        optionPrice: { type: Number, required: true }
    }],
    images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Images'}],
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
