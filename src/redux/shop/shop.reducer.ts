import SHOP_DATA from '../../_dummydata/shoppingdata';
import { Action } from 'redux';
import { IShopData }  from '../../types/models/IShopData';
import { UPDATE_COLLECTIONS } from './shop.types';
import IActionWithPayload from '../../types/models/redux/IActionWithPayload';

interface IShopState {
    collections: IShopData
}

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state : IShopState = INITIAL_STATE, action: IActionWithPayload) => {
    switch(action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }

}

export default shopReducer;