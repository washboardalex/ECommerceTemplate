import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from './cart.types';
import { Action } from 'redux';
import IActionWithPayload from '../../types/models/IActionWithPayload';
import ICollectionItem from '../../types/models/ICollectionItem';
import ICartItem from '../../types/models/ICartItem';

export const toggleCartHidden = () : Action => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: ICollectionItem) : IActionWithPayload => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (item: ICartItem) : IActionWithPayload => ({
    type: REMOVE_ITEM,
    payload: item
}); 

export const clearItemFromCart = (item: ICartItem) : IActionWithPayload => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});