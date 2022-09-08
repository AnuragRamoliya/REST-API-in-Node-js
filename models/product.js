const { product: productSchema,
        review: reviewSchema,
} = require('../schema');
class productModel {
    // 1. add product
    async addProduct(data){

        let info = {
            title: data.title,
            price: data.price,
            description: data.description,
            published: data.published ? data.published : false
        }

        const product = await productSchema.create(info)
        return product

    }

    // 2. get all products

    async getAllProducts(data){

        let products = await productSchema.findAll()
        return products
    }

    // 3. get single product

    async getOneProduct(id){

        let product = await productSchema.findOne({ where: { id: id }})
        return product

    }

    // 4. update Product

    async updateProduct(id){
        const product = await productSchema.update(req.body, { where: { id: id }})
        return product
    }

    // 5. delete product by id

    async deleteProduct(id) {
        await productSchema.destroy({ where: { id: id }} )
        res.send(`Product is deleted ! id : ${id}`)
    }

    // 6. get published product

    async getPublishedProduct(data){

        const products =  await productSchema.findAll({ where: { price: data.price }})

        return products

    }

    // 7. connect one to many relation Product and Reviews

    async getProductReviews(id){
        const data = await productSchema.findOne({
            where: { id: id },
            include: [{
                model: reviewSchema,
            }],
        })

        return data;

    }
}
module.exports = productModel;