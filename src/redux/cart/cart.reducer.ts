import { ICartState, TOGGLE_CART_HIDDEN, ADD_ITEM } from './cart.types';
import { addItemToCart } from './cart.utils';
import IActionWithPayload from '../../types/models/IActionWithPayload';
import ICartItem from '../../types/models/ICartItem';

const INITIAL_STATE : ICartState = {
    hidden: true,
    cartItems: [] as Array<ICartItem>
}

const cartReducer = (state : ICartState = INITIAL_STATE, action: IActionWithPayload) => {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return { 
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;