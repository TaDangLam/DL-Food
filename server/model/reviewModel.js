import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema ({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    text: {type: String, required: true},
    rating: {type: Number, required: true},
}, {
    timestamps: true
})

export const Review = mongoose.model('Review', ReviewSchema);
