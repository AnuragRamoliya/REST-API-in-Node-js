var jwt = require('jsonwebtoken');
const userModel = new (require('../models/user'))();
class Authentication {

    async authenticate(req, res, next) {
        let authToken = req.headers.authorization;
        if (!authToken) {
            res.status(401).json({
                message: 'Token is Invalid',
            })
        }

        const userToken = await userModel.getUserTokenInfo(authToken);

        if (!userToken) {
            res.status(401).json({
                message: 'You are unauthorized',
            })
        }

        req.userInfo = userToken? userToken.user? userToken.user['dataValues'] : null : null;
        // this.setUserType(req)
        // next();
    }
}
module.exports = Authentication;