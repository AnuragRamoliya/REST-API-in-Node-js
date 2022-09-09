
// router
const router = (require('express')).Router()

// import controllers review, products
const productController = new (require('../controllers/product.js'))();

// use routers
router.route('/addProduct').post( productController.addProduct)

router.route('/allProducts').get( productController.getAllProducts)

router.route('/published').get(productController.getPublishedProduct)

// get product Reviews
router.route('/getProductReviews/:id').get( productController.getProductReviews)

// Products router
router.route('/:id').get(productController.getOneProduct)

router.route('/:id').put(productController.updateProduct)

router.route('/:id').delete(productController.deleteProduct)

// export product detail in CSV file 
router.route('/export/:id').get(productController.export)

module.exports = router