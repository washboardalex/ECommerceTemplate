import React from 'react';

import ICartItem from '../../types/models/ICartItem';

import './cart-item.styles.scss';


interface ICartItemComponentProps {
    item: ICartItem
}

const CartItem : React.FunctionComponent<ICartItemComponentProps> = ({ item: { imageUrl, price, name, quantity } } ) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;