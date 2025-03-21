const slug = require('mongoose-slug-updater');
const mongoose = require('mongoose');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, maxLength: 255 },
    tradermark: { type: String, minLength: 4 },
    quantity: { type: Number, default: 0 },
    price: { type: Number, default: 999999 },
    description: { type: String, maxLength: 255 },
    parameters: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
    collection: 'Product'
});

module.exports = mongoose.model('Product', ProductSchema);