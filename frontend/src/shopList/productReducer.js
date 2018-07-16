const initialState = {list: [], total: 0}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOP_LIST_FETCHED':
            return {...state, list: action.payload.data}
        case 'TOTAL_FETCHED':
            return {...state, total: action.payload.data}
        default:
            return state
    }
}