const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    description: {type: String, required: true},
    price: {type: Number, min: 0.00, required: true}
})

const shopListSchema = new mongoose.Schema({
    name_list: {type: String, required: true},
    products: [productSchema],
    total: {type: Number, min: 0.00, default: 0.00},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('ShopList', shopListSchema)