const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/products'

mongoose.Promise = global.Promise
module.exports = mongoose.connect(uri, {useNewUrlParser: true})