const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        static associate(models) {
            product.hasMany(models.review, {
            foreignKey: 'product_id',
            onDelete	: 'cascade'
            })
        }
    }

    product.init({
        id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.BIGINT(20).UNSIGNED
		},
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    
    },{
		sequelize,
		modelName: 'product',
	})

    return product;
}