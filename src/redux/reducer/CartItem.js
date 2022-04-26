// Reducer to get and store user and user session information
import {SET_ITEM , RESET_ITEM} from '../actions'
const initialState = {
    item: {

    }
}
const CartItem = ( state = initialState , action ) => {
    switch (action.type) {
        case SET_ITEM :
            return {
               ...state,
               item: action.payload?.item
            }
        case RESET_ITEM :
            return {
               ...state,
               ...initialState
            }
        default :
            return state
    }
}
export default CartItem; 