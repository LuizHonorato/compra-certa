import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/products`)
    return {
        type: 'SHOP_LIST_FETCHED',
        payload: request
    }
}

export function post(description, price) {
    return dispatch => {
        axios.post(`${BASE_URL}/products`, {description, price})
        .then(resp => { dispatch(getList()) })
    }
}

export function remove(sp) {
    return dispatch => {
        axios.delete(`${BASE_URL}/products/${sp._id}`)
        .then(resp => { dispatch(getList()) })
    }
}