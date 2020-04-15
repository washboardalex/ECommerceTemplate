import { createSelector, OutputSelector } from 'reselect';
import { AppState } from '../_root-reducer';
import { IShopData } from '../../types/models/IShopData';

const selectShop = (state : AppState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = (collectionUrlParam: string) =>
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : []
    );