const express = require('express')

module.exports = function(server) {

    //Rotas da API
    const router = express.Router()
    server.use('/api', router)

    //Rotas do negócio
    const productService = require('../api/product/productService')
    productService.register(router, '/products')
}