const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class address_types extends Model {
        static associate(models) {
            address_types.belongsTo(models.products, {
                foreignKey: 'product_id',
                as: 'product'
            })
        }
    }
    address_types.init({
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return address_types
}