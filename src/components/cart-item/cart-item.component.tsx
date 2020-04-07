import React from 'react';

import './cart-item.styles.scss';
import ICartItem from '../../models/ICartItem';

interface ICartItemComponentProps {
    item: ICartItem
}

const CartItem = ({ item: { imageUrl, price, name, quantity } } : ICartItemComponentProps) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;