
// router
const router = (require('express')).Router()

// import controllers review, products
const productController = new (require('../controllers/product.js'))();
const Authenticator = (new (require('../middleware/authentication'))());
const authenticate = Authenticator.authenticate;

// use routers
router.route('/addProduct').post(authenticate,productController.addProduct)

router.route('/allProducts').get(authenticate,productController.getAllProducts)

router.route('/published').get(authenticate,productController.getPublishedProduct)

// get product Reviews
router.route('/getProductReviews/:id').get(authenticate,productController.getProductReviews)

// Products router
router.route('/:id').get(authenticate,productController.getOneProduct)

router.route('/:id').put(authenticate,productController.updateProduct)

router.route('/:id').delete(authenticate,productController.deleteProduct)

// export product detail in CSV file 
router.route('/export/:id').get(authenticate,productController.export)

module.exports = router