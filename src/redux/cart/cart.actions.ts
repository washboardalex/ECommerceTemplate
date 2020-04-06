import { TOGGLE_CART_HIDDEN } from './cart.types';
import { Action } from 'redux';

export const toggleCartHidden = () : Action => ({
    type: TOGGLE_CART_HIDDEN
});