export const TOGGLE_CART_HIDDEN : string = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM : string = 'ADD_ITEM';
export const CLEAR_ITEM_FROM_CART : string = 'CLEAR_ITEM_FROM_CART';
export const REMOVE_ITEM : string = 'REMOVE_ITEM';

export interface ICartState {
    hidden: boolean,
    cartItems: Array<any>
}
