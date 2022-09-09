const userModel = new (require('../models/user'))();

class UserController {

    //1. Add User
    async add(req, res) {
        try {
            let data = await userModel.add(req.body);

            res.status(200).json({
                message: 'Request has been completed successfully',
                data
            })
        } catch (error) {
            res.status(401).json({
                message: 'Request failed due to an internal error.',
                data
            })
        }
    }

    async login(req, res) {
        try {
            let data = await userModel.login(req.body);

            res.status(200).json({
                message: 'Request has been completed successfully',
                data
            })
        } catch (error) {
            res.status(401).json({
                message: 'Request failed due to an internal error.',
                data
            })
        }
    }
}

module.exports = UserController;