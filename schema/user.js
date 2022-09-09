const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            // user.belongsTo(models.product, {
            //     foreignKey: 'product_id',
            //     onDelete	: 'cascade'
            // })
        }
    }
    user.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT(20).UNSIGNED
        },
        first_name: {
            type: DataTypes.STRING(255),
            comment: "First name of user"
        },
        last_name: {
            type: DataTypes.STRING(255),
            comment: "Last name of user"
        },
        username: {
            type: DataTypes.STRING(255),
            comment: "Username of user"
        },
        email: {
            type: DataTypes.STRING(100),
            set(val) {
                this.setDataValue('email', val.toLowerCase())
            }
        },
        password: {
            type: DataTypes.STRING(255),
            comment: "Password of user",
            defaultValue: '',
            // set(val) {
            //     this.setDataValue('password', encrypt.encryptEntity(val))
            // }
        },
    },{
		sequelize,
		modelName: 'user',
	})

    return user
}