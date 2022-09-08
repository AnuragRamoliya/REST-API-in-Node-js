const { review: reviewSchema } = require('../schema');
class reviewModel {
    async addReview(data) {
        let review = await reviewSchema.create(data)
        return review;
    }

    // 2. Get All Reviews
    async getAllReviews(data) {
        let reviews = await reviewSchema.findAll()
        return reviews;
    }
}

module.exports = reviewModel;