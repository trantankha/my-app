const Product = require('../models/Product');
const { multipleMongooseToObject, mongooseToObject } = require('../../until/mongoose');
//[GET] lấy dữ liệu từ server: req.params
//[POST]lấy dữ liệu từ client: req.body

class ProductController {
    //[GET]/product
    async index(req, res, next) {
        res.render('product');
    }
    // [POST] /product/store
    async store(req, res, next) {
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('/home'))
            .catch(next);
    }
    // [GET] /product/create
    async create(req, res) {
        res.render('handleProduct/create');
    }
    // [GET] /product/show
    async show(req, res, next) {
        const product = await Product.find()
            .then(item => {
                res.render('handleProduct/update', {
                    products: multipleMongooseToObject(item)
                })
            })
            .catch(next);
    }
    // [GET] /product/:id/edit
    async edit(req, res, next) {
        const product = await Product.findById(req.params.id)
            .then(item => {
                res.render('handleProduct/edit', {
                    product: mongooseToObject(item)
                })
            })
            .catch(next);
    }
    // [PUT] /product/:id/update
    async update(req, res, next) {
        const product = await Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/product/update'))
            .catch(next);
    }
}
module.exports = new ProductController();