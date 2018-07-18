const initialState = {list: [], total: 0, cart: []}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOP_LIST_FETCHED':
            return {...state, list: action.payload.data}
        case 'ADDED_TO_CART':
            return {...state, cart: [...state.cart, action.sp]}
        default:
            return state
    }
}