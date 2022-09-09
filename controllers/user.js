const userModel = new (require('../models/user'))();

class UserController {

    //1. Add User
    async add(req, res) {
        try {
            let data = await userModel.add(req.body);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    async login(req, res) {
        try {
            let data = await userModel.login(req.body);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}

module.exports = UserController;