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
    async showAll(req, res, next) {
        Promise.all([Product.find({}), Product.countDocumentsWithDeleted({ deleted: true })])
            .then(([products, deletedCount]) => {
                res.render('handleProduct/update', {
                    products: multipleMongooseToObject(products),
                    deletedCount
                })
            })
            .catch(next);
    }
    // [GET] /product/:id/edit
    async editing(req, res, next) {
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
    // [DELETE] /product/:id/delete
    async deleteSoft(req, res, next) {
        const product = await Product.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [GET] /product/restore
    async deleted(req, res, next) {
        const product = await Product.findWithDeleted({ deleted: true })
            .then(item => {
                res.render('handleProduct/restore', {
                    products: multipleMongooseToObject(item)
                })
            })
            .catch(next);
    }
    // [PATCH] /product/:id/restore
    async restoreOne(req, res, next) {
        const product = await Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE] /product/:id/remove
    async remove(req, res, next) {
        const product = await Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [POST] /product/update/handleEffect
    async handleEffect(req, res, next) {
        switch (req.body.action) {
            case 'Remove':
                const products = await Product.deleteMany({ _id: req.body.productID })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            case 'Delete':
                const product = await Product.delete({ _id: req.body.productID })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.json({ message: 'Action isvalid!' })
        }
    }
}
module.exports = new ProductController();