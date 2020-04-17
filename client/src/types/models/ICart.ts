import ICartItem from './ICartItem';

export default interface ICart {
    hidden: boolean,
    cartItems: Array<ICartItem>
}