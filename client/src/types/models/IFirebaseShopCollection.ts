import ICollectionItem from "./ICollectionItem";

export default interface IFirebaseShopCollection {
  title: string,
  items: Array<ICollectionItem>
}