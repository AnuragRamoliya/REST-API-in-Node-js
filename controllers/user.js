const userModel = new (require('../models/user'))();
const multer = require('multer');
const path = require('path');

const {PATHS} =require('../config/constant')

let tempPath = {
    base: path.join(__dirname, "../public/images" + PATHS.IMAGES.TEMP),
    original: path.join(__dirname, "../public/images" + PATHS.IMAGES.TEMP + PATHS.IMAGES.ORIGINAL + "/"),
    thumb: path.join(__dirname, "../public/images" + PATHS.IMAGES.TEMP + PATHS.IMAGES.THUMB + "/")
}
tempPath[PATHS.IMAGES.ORIGINAL] = tempPath.original
tempPath[PATHS.IMAGES.THUMB] = tempPath.thumb;

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

    async getProfile(req, res) {
        try {
            let data = await userModel.getProfile(req.userInfo);

            res.handler.success(data);
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    async updateProfile(req, res) {
        try {
            let data = await userModel.updateProfile(req.body,req.userInfo);

            res.handler.success(data);
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    async imageUpload(req, res) {
        console.log("req.body >>>", req.body);
        try {
            let file = await userModel.imageUpload(req.body ,req.userInfo);
            console.log("req.body", req.body);
            res.handler.success(file, STATUS_MESSAGES.IMAGE_SUCCESS);
        } catch (error) {
            console.log("error >>>",error)
            res.handler.serverError(error)
        }
    }

    getFileName(file) {
        console.log("object >>>",file);
    return file.originalname.split('.')[0].replace(/[^A-Z0-9]/ig, "_") + '_' + Date.now() + '_' + Math.floor(Math.random() * 999) + 99 + path.extname(file.originalname)}

    resolvePath(filepath){
        return path.join(__dirname,"../../Frontend/public/images"+filepath+"/")
    }

    uploadImage() {
        // console.log("first")
        var storage = multer.diskStorage({
            destination: function (req, file, callBack) {
                callBack(null, this.resolvePath(PATHS.IMAGES.TEMP +PATHS.IMAGES.ORIGINAL))  
            }.bind(this),
            filename: function (req, file, callBack)  {
                let fileName = this.getFileName(file);
            //    console.log("before file name",fileName);
                if (!req.body[file.fieldname]) {
                    req.body[file.fieldname] = []
                    req.body[file.fieldname].push(fileName)
                } else
                    req.body[file.fieldname].push(fileName)
                // console.log("fileName", req.body.file)
                callBack(null, fileName)
            }.bind(this),
        })
        
        return multer({storage})
    }
}

module.exports = UserController;