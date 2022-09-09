const userModel = new (require('../models/user'))();

class UserController {

    //1. Add User
    async add(req, res) {
        try {
            let data = await userModel.add(req.body);

            res.handler.success(data, STATUS_MESSAGES.LOGIN_SUCCESS);
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    async login(req, res) {
        try {
            let data = await userModel.login(req.body);

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