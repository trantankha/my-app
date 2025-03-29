const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductSchema = new Schema({
    _id: { type: Number },
    name: { type: String },
    tradermark: { type: String },
    quantity: { type: Number, default: 0 },
    price: { type: Number },
    describe: { type: String },
    parameters: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    _id: false,
    timestamps: true,
    collection: 'Product'
});
ProductSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isTypeValid = ['asc', 'desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]: isTypeValid ? req.query.type : -1
        })
    }
    return this
}
//Add plugin
mongoose.plugin(slug);
ProductSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
ProductSchema.plugin(AutoIncrement);

module.exports = mongoose.model('Product', ProductSchema);