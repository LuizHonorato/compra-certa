const express = require('express')

module.exports = function(server) {

    //Rotas da API
    const router = express.Router()
    server.use('/api', router)

    //Rotas do negócio
    const shopListService = require('../api/product/productService')
    shopListService.register(router, '/products')
}