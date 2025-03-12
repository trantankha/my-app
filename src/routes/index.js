const homeRouter = require('./home');
const productRouter = require('./product');

const Route = (app) => {
    app.use('/home', homeRouter);
    app.use('/product', productRouter);
}
module.exports = Route;