const ShopList = require('./shopList')
const errorHandler = require('../common/errorHandler')

ShopList.methods(['get', 'post', 'put', 'delete'])
ShopList.updateOptions({new: true, runValidators: true})
ShopList.after('post', errorHandler).after('put', errorHandler)

ShopList.route('total', (req, res, next) => {
    ShopList.aggregate([
        {
            $project: {total: {$sum: "$products.price"}}
        }
    ])   
})

module.exports = ShopList