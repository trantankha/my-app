const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../until/mongoose');
//CRUD(Create, Read, Update, Delete)
class HomeController {
    //[get]/home
    async index(req, res, next) {
        const products = await Product.find()
            .then(products => {
                res.render('home', {
                    products: multipleMongooseToObject(products)
                })
                // res.json(products);
            })
            .catch(next);
    }
    //[get]/home/:slug
    async show(req, res) {
        res.send("Detail Home");
    }
}
module.exports = new HomeController();