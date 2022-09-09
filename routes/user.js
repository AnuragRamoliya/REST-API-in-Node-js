
// router
const router = (require('express')).Router()

// import controllers review, products
const userController = new (require('../controllers/user.js'))();

// use routers
router.route('/signup').post(userController.signup)
router.route('/signin').post(userController.signin)

module.exports = router