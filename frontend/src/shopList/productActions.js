import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/products`)
    return {
        type: 'SHOP_LIST_FETCHED',
        payload: request
    }
}

export function post() {
    return {
        type: 'PRODUCT_ADDED'
    }
}