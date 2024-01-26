import { User } from "../model/userModel.js";
import bcrypt from 'bcrypt';
import middlewareToken from "./jwtService.js";


const userService = {
    createUser: (newUser) => {
        return new Promise(async(resolve, reject) => {
            const { name, email, password, confirmPassword, phone } = newUser;
            try {
                const checkUser = await User.findOne({email});
                if(checkUser !== null) {
                    resolve({
                        status: "OK",
                        message: "You had account"
                    });
                }
                const hash = bcrypt.hashSync(password, 10)
                const createdUser = await User.create({
                    name, 
                    email, 
                    password: hash,
                    phone
                })
                if(createdUser){
                    resolve({ 
                        status: "ok",
                        message: "SUCCESS",
                        data: createdUser
                    })
                }
            } catch (err) {
                reject(err);
            }
        });
    },
    loginUser: (user) => {
        return new Promise(async(resolve, reject) => {
            const { name, email, password, confirmPassword, phone } = user;
            try {
                const checkUser = await User.findOne({email});
                if(checkUser === null) {
                    resolve({
                        status: "OK",
                        message: "The user is not defined"
                    });
                }
                const comparePassword = bcrypt.compareSync(password, checkUser.password);
                console.log('comparePassword: ',comparePassword);
                if(!comparePassword){
                    resolve({
                        status: 'OK',
                        message: 'The Password is incorrect'
                    })
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
                
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: checkUser,
                    accessToken,
                    refreshToken,
                })
            } catch (err) {
                reject(err);
            }
        });
    },
};

export default userService;
