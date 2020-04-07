import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cart.types';
import { Action } from 'redux';
import IActionWithPayload from '../IActionWithPayload';
import ICollectionItem from '../../models/ICollectionItem';

export const toggleCartHidden = () : Action => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: ICollectionItem) : IActionWithPayload => ({
    type: ADD_ITEM,
    payload: item
});