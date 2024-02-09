import mongoose from 'mongoose';

const ImagesSchema = new mongoose.Schema ({
    type: {type: String, required: true},
    url_images: [{ type: String }],
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
}, {
    timestamps: true
})

export const Images = mongoose.model('Images', ImagesSchema);
