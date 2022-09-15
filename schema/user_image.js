
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class user_image extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            user_image.belongsTo(models.user, {
                foreignKey: "user_id",
                onDelete: 'cascade'
            });
        }
    };

    user_image.init({
        id: {
            allowNull       : false,
            autoIncrement   : true,
            primaryKey      : true,
            type            : DataTypes.BIGINT(20).UNSIGNED
        },
        image        : {
            type            : DataTypes.STRING(255),
            comment         : "Image user"
        },
        user_id             : {
            type            : DataTypes.BIGINT(20).UNSIGNED
        },
    }, {
        sequelize,
        modelName: 'user_image',
    });
    return user_image;
};