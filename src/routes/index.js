const homeRouter = require('./home');
const productRouter = require('./product');
const inforRouter = require('./information');

const Route = (app) => {
    app.use('/home', homeRouter);
    app.use('/product', productRouter);
    app.use('/information', inforRouter);
}
module.exports = Route;