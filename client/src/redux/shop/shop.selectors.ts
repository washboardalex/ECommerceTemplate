import { createSelector } from 'reselect';
import { AppState } from '../_root-reducer';

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

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => {console.log(shop); console.log(shop.isFetching); return shop.isFetching}
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections 
);
