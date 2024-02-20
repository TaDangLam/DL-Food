import { StatusCodes} from 'http-status-codes';
import categoryService from '../service/categoryService.js';

const CategoryController = {
    addCategory: async(req, res) => {
        try {
            const { name } = req.body;
            const response = await categoryService.addCategory(req.body);
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json(err);
        }
    },
    getAllCategory: async(req, res) => {
        try {
            const response = await categoryService.getAllCateogry();
            res.status(StatusCodes.OK).json(response);            
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json(err)
        }
    },
    updateCategory: async(req, res) => {
        const { cid } = req.params;
        const { name } = req.body;
        try {
            if(!name){
                res.status(StatusCodes.BAD_REQUEST).json("Please input all required");
            }
            const response = await categoryService.updateCategory(name, cid);
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json(err)
        }
    },
    deleteCategory: async(req, res) => {
        const { cid } = req.params;
        try {
            const response = await categoryService.deleteCategory(cid)
            res.status(StatusCodes.OK).json(response);            
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json(err)
        }
    }
}

export default CategoryController;
