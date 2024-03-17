import { StatusCodes} from 'http-status-codes';
import bcrypt from 'bcrypt';

import userService from "../service/userService.js";
import middlewareToken from '../service/jwtService.js';

const userController = {
    getAllUser: async(req, res) => {
        try {
            const response = await userService.getAllUser();
            res.status(StatusCodes.OK).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    getDetailUser: async(req, res) => {
        const id = req.params.id;
        try {
            const response = await userService.getDetailUser(id);
            res.status(StatusCodes.OK).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }  
    },
    createUser: async(req, res) => {
        try {
           const { name, email, password, confirmPassword, phone } = req.body;
            const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            const checkMail = regex.test(email);
            if(!name || !email || !password || !confirmPassword || !phone){
                return res.status(StatusCodes.BAD_REQUEST).json({message: 'Please complete all information'});
            } else if (!checkMail) {
                return res.status(StatusCodes.BAD_REQUEST).json({message: 'Email is not valid'})
            } else if (password !== confirmPassword) {
                return res.status(StatusCodes.BAD_REQUEST).json({message: 'Password and confirmPassword is not match'})
            }
            const response = await userService.createUser(req.body);
            res.status(StatusCodes.CREATED).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    loginUser: async(req, res) => {
        try {
            const { name, password } = req.body;
            //  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            //  const checkMail = regex.test(email);
            if(!name || !password){
                return res.status(StatusCodes.BAD_REQUEST).json({message: 'Please complete all information'});
            }
            const response = await userService.loginUser(req.body);
            res.status(StatusCodes.ACCEPTED).json(response);
         } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
         }
    },
    updateUser: async(req, res) => {
        try {
            const userId = req.params.id;
            const data = req.body;
            if(!userId){
                return res.status(StatusCodes.NOT_FOUND).json('The user is not required')
            }
            const response = await userService.updateUser(userId, data);
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    deleteUser: async(req, res) => {
        try {
            const userId = req.params.id;
            if(!userId){
                return res.status(StatusCodes.NOT_FOUND).json('The user is not required')
            }
            const response = await userService.deleteUser(userId);
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    refreshToken: async(req, res) => {
        try {
            const token = req.headers.token;
            if(!token) {
                return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).josn({message: 'The Token is required'});
            }
            const response = await middlewareToken.refreshTokenService(token);
            return res.status(StatusCodes.OK).json(response);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    },
    forgotPassword: async(req, res) => {
        try {
            
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }
}

export default userController;
