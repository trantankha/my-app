const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, maxLength: 255 },
    tradermark: { type: String, minLength: 4 },
    quantity: { type: Number, default: 0 },
    price: { type: Number, default: 999999 },
    describe: { type: String, maxLength: 255 },
    parameters: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
    collection: 'Product'
});
//Add plugin
mongoose.plugin(slug);
ProductSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Product', ProductSchema);