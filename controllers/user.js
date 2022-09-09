const userModel = new (require('../models/user'))();

class UserController {

    //1. Add User
    async signup(req, res) {
        try {
            let data = await userModel.signup(req.body);

            if (data.status === STATUS_CODES.ALREADY_REPORTED) {
                res.handler.conflict(undefined, data.message);
                return;
            }

            if (data.status === STATUS_CODES.NOT_VALID_DATA) {
                res.handler.validationError(undefined, data.message);
                return;
            }
            
            res.handler.success(data, STATUS_MESSAGES.REGISTER_SUCCESS);
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    async signin(req, res) {
        try {
            let data = await userModel.signin(req.body);

            if (data.status === STATUS_CODES.NOT_VALID_DATA) {
                res.handler.validationError(undefined, data.message);
                return;
            }

            if (data.status === STATUS_CODES.NOT_FOUND) {
                res.handler.notFound(undefined, data.message);
                return;
            }

            res.handler.success(data, STATUS_MESSAGES.LOGIN_SUCCESS);
        } catch (error) {
            res.handler.serverError(error)
        }
    }
}

module.exports = UserController;