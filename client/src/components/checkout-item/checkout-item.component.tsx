import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import ICartItem from '../../types/models/ICartItem';
import { Dispatch, AnyAction } from 'redux';
import { fArgReturn } from '../../types/FunctionTypes';

import './checkout-item.styles.scss';


interface IDispatchProps {
    clearItem: fArgReturn,
    addItem: fArgReturn,
    removeItem: fArgReturn
}

interface IReceivedProps {
    cartItem: ICartItem
}

type CheckoutItemProps = IDispatchProps & IReceivedProps;

const CheckoutItem : React.FC<CheckoutItemProps> = ({cartItem, clearItem, addItem, removeItem} ) => {

    const { imageUrl, name, quantity, price } : ICartItem = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => {
                    removeItem(cartItem);
                }}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    clearItem: (item : ICartItem) => dispatch(clearItemFromCart(item)),
    addItem: (item : ICartItem) => dispatch(addItem(item)),
    removeItem: (item : ICartItem) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);