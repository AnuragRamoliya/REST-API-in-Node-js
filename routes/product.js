
// router
const router = (require('express')).Router()

// import controllers review, products
const productController = new (require('../controllers/product_controller.js'))();
const reviewController = new (require('../controllers/review_controller.js'))();

// use routers
router.route('/addProduct').post( productController.addProduct)

router.route('/allProducts').get( productController.getAllProducts)

router.route('/published').get(productController.getPublishedProduct)

// Review Url and Controller

router.route('/allReviews').get(reviewController.getAllReviews)
router.route('/addReview').post(reviewController.addReview)

// get product Reviews
router.route('/getProductReviews/:id').get( productController.getProductReviews)




// Products router
router.route('/:id').get(productController.getOneProduct)

router.route('/:id').put(productController.updateProduct)

router.route('/:id').delete(productController.deleteProduct)

module.exports = router