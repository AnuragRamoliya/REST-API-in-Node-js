const Sequelize = require('sequelize');

const DB_CREDENTIAL = {
    HOST:'localhost',
    USER:'root',
    PASSWORD:'',
    DB:'crud_api',
    dialect:'mysql',

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000,
    }
}

sequelize = new Sequelize(DB_CREDENTIAL);
sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})


module.exports = {
    development: DB_CREDENTIAL,
    database: sequelize,
}