import {combineReducers} from 'redux'
import ProductReducer from '../shopList/productReducer'

const rootReducer = combineReducers({
    shopList: ProductReducer
})

export default rootReducer