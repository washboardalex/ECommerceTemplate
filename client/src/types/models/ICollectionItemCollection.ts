import ICollectionItem from './ICollectionItem';
import IFirebaseShopCollection from './IFirebaseShopCollection';

export default interface ICollectionItemCollection extends IFirebaseShopCollection {
  id: number,
  routeName: string,
}