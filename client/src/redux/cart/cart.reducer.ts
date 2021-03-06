import { ICartState, TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';
import IActionWithPayload from '../../types/models/redux/IActionWithPayload';
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
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case REMOVE_ITEM: 
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;