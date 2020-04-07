export const TOGGLE_CART_HIDDEN : string = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM : string = 'ADD_ITEM';

export interface ICartState {
    hidden: boolean,
    cartItems: Array<any>
}
