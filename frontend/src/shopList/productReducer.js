const initialState = {list: [], total: 0, quant: 1, cart: []}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOP_LIST_FETCHED':
            return {...state, list: action.payload.data}
        case 'ADDED_TO_CART':
            return {...state, cart: [...state.cart, action.sp] }
        case 'CHANGE_QUANT':
            console.log(state.cart[action.index]._id === action.id)
            return {...state, quant: +action.payload }
        case 'REMOVE_FROM_CART':
            return {...state, cart: [...state.cart.slice(0, action.index), ...state.cart.slice(action.index + 1 ) ]}
        default:
            return state
    }
}