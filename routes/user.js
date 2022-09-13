
// router
const router = (require('express')).Router()

// import controllers review, products
const userController = new (require('../controllers/user.js'))();
const Authenticator = (new (require('../middleware/authentication'))());
const authenticate = Authenticator.authenticate;

// use routers
router.route('/signup').post(userController.signup)
router.route('/signin').post(userController.signin)

// get user details
router.route('/getprofile').get(authenticate,userController.getProfile)

// get user details
router.route('/updateProfile').put(authenticate,userController.updateProfile)


module.exports = router