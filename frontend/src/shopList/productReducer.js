import update from 'immutability-helper'

const initialState = {list: [], total: 0, quantity: 1, cart: []}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOP_LIST_FETCHED':
            return {...state, list: action.payload.data}
        case 'ADDED_TO_CART':
            return {...state, cart: [...state.cart, action.sp] }
        case 'COUNT_QUANT':
            console.log(action.ic)
            return Object.assign(
                [...state],
                {[action.ic]:
                    Object.assign({}, state.quantity, {quantity: +state.quantity})}
            )
        case 'REMOVE_FROM_CART':
            return {...state, cart: [...state.cart.slice(0, action.index), ...state.cart.slice(action.index + 1 ) ]}
        default:
            return state
    }
}