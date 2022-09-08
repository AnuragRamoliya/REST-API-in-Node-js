const { product: productSchema,
        review: reviewSchema,
} = require('../schema');
const excelJs = require('exceljs')
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

    async export(id){
        try {
            const product_data = await productSchema.findAll()
            const workbook = new excelJs.Workbook();
            const worksheet = workbook.addWorksheet('My Product');
            worksheet.columns = [
                {header: 'ID', key: 'id', width: 10},
                {header: 'TITLE', key: 'title', width: 10},
                {header: 'PRICE', key: 'price', width: 10},
                {header: 'DESCRIPTION', key: 'description', width: 10},
                {header: 'PUBLISHED', key: 'published', width: 10}
            ];
            product_data.forEach(user => {
                worksheet.addRow(user);
            });
            worksheet.getRow(1).eachCell((cell) => {
                cell.font = {bold: true};
                cell.fill = {
                    type: "pattern",
                    pattern: "solid",
                    fgColor: {
                        argb: "FFFF7D7D"
                    },
                    bgColor: {
                        argb: "FF000000"
                    }
                }
            });
            const data = await workbook.xlsx.writeFile('product.csv')
            res.send('done');
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
module.exports = productModel;