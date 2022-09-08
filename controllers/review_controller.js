const reviewModel = new (require('../models/review'))();

class ReviewController {

    //1. Add Review
    async addReview(req, res) {
        try {
            let data = await reviewModel.addReview(req.body);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    // 2. Get All Reviews

    async getAllReviews(req, res) {
        try {
            let data = await reviewModel.getAllReviews();

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}

module.exports = ReviewController;