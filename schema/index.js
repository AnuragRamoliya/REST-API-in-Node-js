const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + './configs/dbconfig.js');
const db = {};

db.products = require('./product.js')(sequelize, DataTypes)
db.reviews = require('./review.js')(sequelize, DataTypes)

let sequelize;
fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// db.sequelize.sync({ force: false })
// .then(() => {
//     console.log('yes re-sync done!')
// })



// // 1 to Many Relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db
