import mongoose from 'mongoose';

const optionSizes = [Small, Medium, Big];

const ProductOptionSchema = new mongoose.Schema ({
    optioneName: {type: String, required: true},
    optionSize: {type: String, enum: optionSizes, default: 'Small'},
    optionPrice: {type: Number, required: true}
}, {
    timestamps: true
})

export const Option = mongoose.model('Option', ProductOptionSchema);
