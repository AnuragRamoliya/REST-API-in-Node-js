
const path = require('path');

const { user: userSchema,
        user_token: userTokenSchema, 
        user_image: userImageSchema 
} = require('../schema');

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class userModel {
    async signup(data) {

        let check_email= await userSchema.findOne({
            where:{email:data.email}
        })
        if(check_email)
        {
            return {
                status: STATUS_CODES.ALREADY_REPORTED,
                message: STATUS_MESSAGES.EXISTS.EMAIL
            };
        }

        if(data.password !== data.confirm_password){
            return {
                status: STATUS_CODES.NOT_VALID_DATA,
                message: STATUS_MESSAGES.PASSWORD.NOT_SAME
            };
        }else{
            let hashPassword = await bcrypt.hash(data.password,10);

            let register_data ={
                first_name:data.first_name,
                last_name:data.last_name,
                contact_no:data.contact_no,
                email:data.email,
                username:data.username,
                password:hashPassword
            } 
            let user = await userSchema.create(register_data)
            // return user;

            let token = jwt.sign({email:user.email},process.env.SECRET_KEY);

            return {
                user:user,
                token:token
            };
        }
        
    }

    async signin(data) {
        let check_email= await userSchema.findOne({
            where:{email:data.email}
        })

        if(!check_email){
            return {
                status: STATUS_CODES.NOT_FOUND,
                message: STATUS_MESSAGES.NOT_FOUND.USER
            };
        }

        let match_password = await bcrypt.compare(data.password,check_email.password)

        if(!match_password){
            return {
                status: STATUS_CODES.NOT_VALID_DATA,
                message: STATUS_MESSAGES.PASSWORD.INCORRECT
            };
        }

        let token = jwt.sign({email:check_email.email},process.env.SECRET_KEY);
        await userTokenSchema.create({access_token:token,user_id:check_email.id})
        return {
            user:check_email,
            token:token
        };
    }

    async getUserTokenInfo(access_token) {
        return await userTokenSchema.findOne({
            where: {
                access_token
            },
            attributes: ['user_id', 'updatedAt'],
            include: [
                {
                    model: userSchema,
                }
            ]
        });
    }

    async getProfile(userInfo) {
        return await userSchema.findAll({
            where: {
                id:userInfo.id
            },
            include: [{
                model: userImageSchema,
            }],
        });
    }

    async updateProfile(data,userInfo) {
        return await userSchema.update(data,{
            where: {
                id:userInfo.id
            },
        });
    }

    async imageUpload(data, userInfo) {
        if(!data){
            console.log("data not found",data)
            // return {
            //     status: STATUS_CODES.NOT_FOUND,
            //     message: STATUS_MESSAGES.NOT_FOUND.IMAGE
            // };
        }
        console.log("data.file >>",data)
        let imgUrl = path.join("../images/Temp/Original/"+data.file)
        console.log("img url", imgUrl)

        let reqBody = {
            image: imgUrl , user_id : userInfo.id
        };

        return await userImageSchema.create(reqBody);
        
    }
}

module.exports = userModel;