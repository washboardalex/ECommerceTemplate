import SHOP_DATA from '../../_dummydata/shoppingdata';
import { Action } from 'redux';
import { IShopData }  from '../../types/models/IShopData';

interface IShopState {
    collections: IShopData
}

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state : IShopState = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        default:
            return state
    }

}

export default shopReducer;