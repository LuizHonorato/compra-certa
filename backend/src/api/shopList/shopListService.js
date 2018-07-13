const ShopList = require('./shopList')
const errorHandler = require('../common/errorHandler')

ShopList.methods(['get', 'post', 'put', 'delete'])
ShopList.updateOptions({new: true, runValidators: true})
ShopList.after('post', errorHandler).after('put', errorHandler)

ShopList.route('total', (req, res, next) => {
    ShopList.aggregate([{
        $project: {total: {$sum: "$products.price"}}
    }, {
        $group: {_id: "$_id", total: {$sum: "$total"}}
    }
    ]).exec((error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result || {total: 0})
        }
    })
})

module.exports = ShopList