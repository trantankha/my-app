const Product = require('../models/Product');
const { mongooseToObject } = require('../../until/mongoose');

class InforController {
    // [GET] /information/:slug
    async show(req, res, next) {
        const product = await Product.findOne({ slug: req.params.slug })
            .then(item => {
                res.render('information', {
                    product: mongooseToObject(item)
                })
                // res.json(item);
            })
            .catch(next);
    }
}
module.exports = new InforController();