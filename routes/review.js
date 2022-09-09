
// router
const router = (require('express')).Router()

// import controllers review
const reviewController = new (require('../controllers/review.js'))();

// Review Url and Controller

router.route('/allReviews').get(reviewController.getAllReviews)
router.route('/addReview').post(reviewController.addReview)

module.exports = router