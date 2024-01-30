import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import { StatusCodes } from 'http-status-codes';

const authMiddleWare = (req, res, next) => {
    const tokenHeader = req.headers.token;
    const userId = req.params.id;
    if(!tokenHeader){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'Token is missing in the request headers',
            status: 'ERROR'
        });
    }
    const token = tokenHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(StatusCodes.NOT_FOUND).json({
                messsage: 'The Token is not exist',
                status: 'ERROR'
            });
        }
        const { payload } = user;

        if(payload?.role === 'admin' || payload.id === userId) {
            next();
        }else {
            return res.status(StatusCodes.NOT_FOUND).json({
                messsage: 'The Token is not Authorticated',
                status: 'ERROR'
            });
        }
    })
}

export default authMiddleWare;
