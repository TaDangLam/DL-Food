import jwt from 'jsonwebtoken';

const middlewareToken = {
    genneralAccessToken: async(payload) => {
        console.log('payload', payload)
        const access_token = jwt.sign({payload}, process.env.ACCESS_TOKEN, { expiresIn: '1h'});
        return access_token;
    },
    genneralRefreshToken: async(payload) => {
        const refresh_token = jwt.sign({payload}, process.env.REFRESH_TOKEN, { expiresIn: '365d'});
        return refresh_token;
    }
}

export default middlewareToken;
