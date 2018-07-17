const initialState = {list: [], total: 0, cart: []}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOP_LIST_FETCHED':
            return {...state, list: action.payload.data}
        default:
            return state
    }
}