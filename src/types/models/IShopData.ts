import ICollectionItemCollection from './ICollectionItemCollection';
import ObjectWithStringKey from '../ObjectWithStringKey';

export interface IShopData extends ObjectWithStringKey {
    hats: ICollectionItemCollection,
    sneakers: ICollectionItemCollection,
    jackets: ICollectionItemCollection,
    womens: ICollectionItemCollection,
    mens: ICollectionItemCollection
}