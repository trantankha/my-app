class ProductController {
    //[get]/home
    async index(req, res) {
        res.render('product');
    }
    async detail(req, res) {
        res.send('Detail Product');
    }
}
module.exports = new ProductController();