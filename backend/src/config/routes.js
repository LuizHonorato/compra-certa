const express = require('express')

module.exports = function(server) {

    //Rotas da API
    const router = express.Router()
    server.use('/api', router)

    //Rotas do negócio
    const shopListService = require('../api/shopList/shopListService')
    shopListService.register(router, '/shop-list')
}