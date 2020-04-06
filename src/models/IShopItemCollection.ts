import IShopItem from './IShopItem';

export default interface IShopItemCollection {
    id: number,
    title: string,
    routeName: string,
    items: Array<IShopItem>
  }