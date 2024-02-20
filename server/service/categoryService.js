import { Category } from '../model/categoriesModel.js'

const categoryService = {
    addCategory: async(newCate) => {
        try {
            const { name } = newCate;
            const newCategory = await Category.create({ name });
            return {
                status: 'OK',
                message: 'Add New Category is Successfully',
                data: newCategory
            }
        } catch (err) {
            throw err;
        }
    },
    getAllCateogry: async() => {
        try {
            const cate = await Category.find();
            return {
                status: 'OK',
                message: 'Get All Category Success',
                data: cate
            }
        } catch (err) {
            throw err
        }
    },
    updateCategory: async(name, cid) => {
        try {
            const cate = await Category.findByIdAndUpdate(cid, { name },  {new: true});
            return {
                status: 'OK',
                message: 'Update Category is Success',
                data: cate
            }
        } catch (err) {
            throw err
        }
    },
    deleteCategory: async(cid) => {
        try {
            await Category.findByIdAndDelete(cid);
            return {
                status: 'OK',
                message: 'Category is Deleted'
            }
        } catch (err) {
            throw err
        }
    }
};

export default categoryService;
