// Parent reducer which combines all other reducers
import {combineReducers} from 'redux'
import CartItem from './CartItem'

   
const allReducers = combineReducers({    
   cartItem : CartItem
});

export default allReducers