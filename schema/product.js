const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class address_types extends Model {
        static associate(models) {
            address_types.hasMany(models.reviews, {
            foreignKey: 'product_id',
            as: 'review'
        })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })
        }
    }

    address_types.init({
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
    
    })

    return address_types;


}