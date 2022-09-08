const productModel = new (require('../models/product'))();
// main work
class ProductController {
    async addProduct(req, res) {
        try {
            let data = await productModel.addProduct(req.body);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    async getAllProducts(req, res) {
        try {
            let data = await productModel.getAllProducts();

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    async getOneProduct(req, res) {
        try {
            let data = await productModel.getOneProduct(req.params.id);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    async updateProduct(req, res) {
        try {
            let data = await productModel.updateProduct(req.params.id);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    async deleteProduct(req, res) {
        try {
            let data = await productModel.deleteProduct(req.params.id);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    async getPublishedProduct(req, res) {
        try {
            let data = await productModel.getPublishedProduct(req.body);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    async getProductReviews(req, res) {
        try {
            let data = await productModel.getProductReviews(req.params.id);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }

    async export(req, res) {
        try {
            let data = await productModel.export(req.params.id);

            res.status(200).send(data)
        } catch (error) {
            res.status(401).send(error)
        }
    }
}

module.exports = ProductController;