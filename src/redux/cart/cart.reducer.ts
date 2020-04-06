import { ICartState, TOGGLE_CART_HIDDEN } from './cart.types';
import IActionWithPayload from '../IActionWithPayload';

const INITIAL_STATE : ICartState = {
    hidden: true
}

const cartReducer = (state : ICartState = INITIAL_STATE, action: IActionWithPayload) => {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return { 
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;