const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    description: {type: String, required: true},
    price: {type: Number, min: 0.00, required: true},
    createdAt: {type: Date, default: Date.now}
})


module.exports = restful.model('Product', productSchema)