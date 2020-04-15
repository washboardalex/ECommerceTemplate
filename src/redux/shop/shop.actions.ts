import { UPDATE_COLLECTIONS } from './shop.types';
import { IShopData } from '../../types/models/IShopData';
import IActionWithPayload from '../../types/models/redux/IActionWithPayload';

export const updateCollections = (collectionsMap : IShopData) : IActionWithPayload => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
})