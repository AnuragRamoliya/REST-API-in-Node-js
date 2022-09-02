const { product: addressTypeSchema } = require('../schema');
class productModel {
    // 1. add product
    async addProduct(req, res){

        let info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }

        const product = await Product.create(info)
        res.status(200).send(product)
        console.log(product)

    }

    // 2. get all products

    async getAllProducts(req, res){

        let products = await Product.findAll({})
        res.status(200).send(products)

    }

    // 3. get single product

    async getOneProduct(req, res){

        let id = req.params.id
        let product = await Product.findOne({ where: { id: id }})
        res.status(200).send(product)

    }

    // 4. update Product

    async updateProduct(req, res){

        let id = req.params.id

        const product = await Product.update(req.body, { where: { id: id }})

        res.status(200).send(product)
    

    }

    // 5. delete product by id

    async deleteProduct(req, res) {

        let id = req.params.id
        
        await Product.destroy({ where: { id: id }} )

        res.status(200).send(`Product is deleted ! id : ${id}`)

    }

    // 6. get published product

    async getPublishedProduct(req, res){

        const products =  await Product.findAll({ where: { price: 38000 }})

        res.status(200).send(products)

    }

    // 7. connect one to many relation Product and Reviews

    async getProductReviews(req, res){

        const id = req.params.id

        const data = await Product.findOne({
            include: [{
                model: Review,
                as: 'review'
            }],
            where: { id: id }
        })

        res.status(200).send(data)

    }
}
module.exports = productModel;