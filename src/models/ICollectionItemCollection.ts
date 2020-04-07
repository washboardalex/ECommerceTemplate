import ICollectionItem from './ICollectionItem';

export default interface ICollectionItemCollection {
    id: number,
    title: string,
    routeName: string,
    items: Array<ICollectionItem>
  }