const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class review extends Model {
        static associate(models) {
            review.belongsTo(models.product, {
                foreignKey: 'product_id',
                onDelete	: 'cascade'
            })
        }
    }
    review.init({
        id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.BIGINT(20).UNSIGNED
		},
        product_id:{
            type: DataTypes.BIGINT(20).UNSIGNED
        },
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    },{
		sequelize,
		modelName: 'review',
	})

    return review
}