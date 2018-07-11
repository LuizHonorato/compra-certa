const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    description: {type: String, required: true},
    price: {type: Number , required: true},
    is_promotion: {type: Boolean, default: false}
})

module.exports = restful.model('Product', productSchema)