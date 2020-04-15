import { Action } from 'redux';
import { IShopData }  from '../../types/models/IShopData';
import { UPDATE_COLLECTIONS } from './shop.types';
import IActionWithPayload from '../../types/models/redux/IActionWithPayload';

interface IShopState {
    collections: IShopData | null
}

const INITIAL_STATE : IShopState = {
    collections: null
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