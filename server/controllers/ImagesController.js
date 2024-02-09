import { StatusCodes} from 'http-status-codes';
import bcrypt from 'bcrypt';
import cloudinary from '../configs/cloundinaryConfig.js';


const imagesController = {
    uploadImages: async(req, res) => {
        try {
            console.log(req.files)
            res.status(StatusCodes.OK).json('OK');
        } catch (err) {
            return res.status(StatusCodes.NOT_FOUND).json(err);
        }
    }
}

export default imagesController;
