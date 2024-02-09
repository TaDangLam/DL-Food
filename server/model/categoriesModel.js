import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema ({
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    name: {type: String, required: true},
}, {
    timestamps: true
})

export const Category = mongoose.model('Category', CategorySchema);
