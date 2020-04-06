import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { Dispatch, AnyAction } from 'redux';
import { fArgReturn } from '../../types/Functions';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingbag.svg';

import './cart-icon.styles.scss';



const mapDispatchToProps = (dispatch : Dispatch<AnyAction>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

interface ICartIconProps {
    toggleCartHidden: fArgReturn
}

const CartIcon = ({ toggleCartHidden }: ICartIconProps) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

export default connect(null, mapDispatchToProps)(CartIcon);