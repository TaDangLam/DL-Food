import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from "../model/userModel.js";
import middlewareToken from "./jwtService.js";


const userService = {
    getAllUser: async() => {
        try {
            const allUser = await User.find();
            return {
                status: 'OK',
                message: 'Get all user is success',
                data: allUser
            }
        } catch (err) {
            throw err;
        }
    },
    getDetailUser: async(id) => {
        try {
            const checkUser = await User.findById(id);
            if (!checkUser){
                return {
                    status: 'OK',
                    message: 'User is not define'
                }
            }
            return{
                status: 'OK',
                message: 'SUCCESS',
                data: checkUser
            }
        } catch (err) {
            throw err;
        }
    },
    createUser: async(newUser) => {
        const { name, email, password, confirmPassword, phone } = newUser;
        try {
            const checkUser = await User.findOne({ email });
            // console.log(checkUser)
            if (checkUser) {
                return {
                    status: "OK",
                    message: "You already have an account"
                };
            }
            const hashed = bcrypt.hashSync(password, 10)
            const newUserDoc = new User({
                name,
                email,
                password: hashed,
                confirmPassword: hashed,
                phone,
            });
            const user = await newUserDoc.save();
            return {
                status: "OK",
                message: "CREATED",
                data: user
            };
        } catch (err) {
            throw err;
        }
    },
    loginUser: async(user) => {
        const { name,  password } = user;
            try {
                const checkUser = await User.findOne({name}).populate('address');
                if(checkUser === null) {
                    throw new Error('User is not exist');
                }
                const comparePassword = bcrypt.compareSync(password, checkUser.password);
                // console.log('comparePassword: ',comparePassword);
                if(!comparePassword){
                    throw new Error('Password is not incorrect');
                }
                
                // create AccessToken
                const accessToken = await middlewareToken.genneralAccessToken({
                    id: checkUser._id,
                    role: checkUser.role
                })
                // create RefreshToken
                const refreshToken = await middlewareToken.genneralRefreshToken({
                    id: checkUser._id,
                    role: checkUser.role
                })

                const userWithoutPassword = {
                    ...checkUser._doc,
                    password: undefined,
                    confirmPassword: undefined,
                };
                
                return({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: userWithoutPassword,
                    accessToken,
                    refreshToken,
                })
            } catch (error) {
                throw new Error(error.message);
            }
    },
    updateUser: (userId, data) => {
        return new Promise(async(resolve, reject) => {
            // const { name, email, password, confirmPassword, phone } = user;
            try {
                const checkUser = await User.findById(userId);
                if(checkUser === null) {
                    resolve({
                        status: "OK",
                        message: "The user is not defined"
                    });
                }
                const updateUser = await User.findByIdAndUpdate(userId, data, { new: true });
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: updateUser
                })
            } catch (err) {
                reject(err);
            }
        });
    },
    deleteUser: (userId) => {
        return new Promise(async(resolve, reject) => {
            try {
                const checkUser = await User.findById(userId);
                
                if(checkUser === null) {
                    resolve({
                        status: "OK",
                        message: "The user is not defined"
                    });
                }
                
                const updateUser = await User.findByIdAndDelete(userId);
               
                resolve({
                    status: 'OK',
                    message: 'Deleted User is successfully'
                })
            } catch (err) {
                reject(err);
            }
        });
    },
};

export default userService;
