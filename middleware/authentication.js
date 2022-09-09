var jwt = require('jsonwebtoken');
const userModel = new (require('../models/user'))();
class Authentication {

    async authenticate(req, res, next) {
        // console.log("authenticate",req.headers.authorization)
        let authToken = req.headers.authorization;
        if (!authToken) {
            res.handler.validationError(undefined, STATUS_MESSAGES.TOKEN.INVALID);
            return false
        }

        const userToken = await userModel.getUserTokenInfo(authToken);

        if (!userToken) {
            res.handler.unauthorized();
            return;
        }

        req.userInfo = userToken? userToken.user? userToken.user['dataValues'] : null : null;
        next();
    }
}
module.exports = Authentication;