import { createSelector } from 'reselect';
import { AppState } from '../_root-reducer';
import ICartItem from '../../types/models/ICartItem';
import ICart from '../../types/models/ICart';

const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart : ICart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart: ICart) => cart.hidden   
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity : number, item : ICartItem) => 
            accumulatedQuantity + item.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity : number, item : ICartItem) => 
            accumulatedQuantity + ( item.quantity * item.price ), 0)
);