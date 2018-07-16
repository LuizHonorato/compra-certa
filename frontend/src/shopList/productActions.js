import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/shop-list`)
    return {
        type: 'SHOP_LIST_FETCHED',
        payload: request
    }
}

export function getTotal() {
    const request = axios.get(`${BASE_URL}/shop-list/total`)
    return {
        type: 'TOTAL_FETCHED',
        payload: request
    }
}