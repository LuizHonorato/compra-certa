const Product = require('./product')
const errorHandler = require('../common/errorHandler')

Product.methods(['get', 'post', 'put', 'delete'])
Product.updateOptions({new: true, runValidators: true})
Product.after('post', errorHandler).after('put', errorHandler)


module.exports = Product