import { StatusCodes} from 'http-status-codes';
import bcrypt from 'bcrypt';

import userService from "../service/userService.js";

const userController = {
    createUser: async(req, res) => {
        try {
           const { name, email, password, confirmPassword, phone } = req.body;
            const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            const checkMail = regex.test(email);
            if(!name || !email || !password || !confirmPassword || !phone){
                return res.status(StatusCodes.BAD_REQUEST).json()
            } else if (!checkMail) {
                return res.status(StatusCodes.BAD_REQUEST).json()
            } else if (password !== confirmPassword) {
                return res.status(StatusCodes.BAD_REQUEST).json()
            }
            const response = await userService.createUser(req.body);
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json();
        }
    },
    loginUser: async(req, res) => {
        try {
            const { name, email, password, confirmPassword, phone } = req.body;
             const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
             const checkMail = regex.test(email);
             if(!name || !email || !password || !confirmPassword || !phone){
                    return res.status(StatusCodes.BAD_REQUEST).json()
             } else if (!checkMail) {
                    return res.status(StatusCodes.BAD_REQUEST).json()
             } else if (password !== confirmPassword) {
                    return res.status(StatusCodes.BAD_REQUEST).json()
             }
             const response = await userService.loginUser(req.body);
             res.status(StatusCodes.OK).json(response);
         } catch (err) {
             res.status(StatusCodes.NOT_FOUND).json();
         }
    }
}

export default userController;
