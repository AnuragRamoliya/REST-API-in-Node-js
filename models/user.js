const { user: userSchema,
        user_token: userTokenSchema 
} = require('../schema');

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class userModel {
    async add(data) {
        console.log("date b here", data);

        let check_email= await userSchema.findOne({
            where:{email:data.email}
        })
        if(check_email)
        {
            return {
                status: 401,
                message: "user already exists"
            };
        }

        if(data.password !== data.confirm_password){
            return {
                status: 401,
                message: "password and confirm password does not match"
            };
        }else{
            let hashPassword = await bcrypt.hash(data.password,10);

            let user = await userSchema.create({email:data.email,username:data.username,password:hashPassword})
            // return user;

            let token = jwt.sign({email:user.email},process.env.SECRET_KEY);

            return {
                user:user,
                token:token
            };
        }
        
    }

    async login(data) {
        let check_email= await userSchema.findOne({
            where:{email:data.email}
        })

        if(!check_email){
            return {
                status: 401,
                message: "user not found"
            };
        }

        let match_password = await bcrypt.compare(data.password,check_email.password)

        if(!match_password){
            return {
                status: 401,
                message: "Invalid Credentials"
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
}

module.exports = userModel;