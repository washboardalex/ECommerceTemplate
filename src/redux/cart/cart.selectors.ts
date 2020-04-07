import { createSelector } from 'reselect';
import { AppState } from '../_root-reducer';

const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0)
)