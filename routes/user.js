
// router
const router = (require('express')).Router()

// import controllers review, products
const userController = new (require('../controllers/user.js'))();

// use routers
router.route('/add').post(userController.add)
router.route('/login').post(userController.login)

module.exports = router