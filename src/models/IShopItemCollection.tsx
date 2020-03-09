import IShopItem from './IShopItem';

export default interface IShopItemCollection {
    id: Number,
    title: String,
    routeName: String,
    items: Array<IShopItem>
  }