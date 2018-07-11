const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    description: {type: String, required: true},
    price: {type: Schema.Types.Decimal128 , required: true, default: 0.00},
    is_promotion: {type: Boolean, default: false}
})

module.exports = restful.model('Product', productSchema)