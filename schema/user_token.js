
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class user_token extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            user_token.belongsTo(models.user, {
                foreignKey: "user_id",
                onDelete: 'cascade'
            });
        }
    };

    user_token.init({
        id: {
            allowNull       : false,
            autoIncrement   : true,
            primaryKey      : true,
            type            : DataTypes.BIGINT(20).UNSIGNED
        },
        access_token        : {
            type            : DataTypes.STRING(255),
            comment         : "Access token"
        },
        user_id             : {
            type            : DataTypes.BIGINT(20).UNSIGNED
        },
    }, {
        sequelize,
        modelName: 'user_token',
    });
    return user_token;
};