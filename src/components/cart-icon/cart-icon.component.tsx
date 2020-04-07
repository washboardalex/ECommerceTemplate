import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { Dispatch, AnyAction } from 'redux';
import { fArgReturn } from '../../types/Functions';
import { AppState } from '../../redux/_root-reducer';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingbag.svg';

import './cart-icon.styles.scss';

const mapDispatchToProps = (dispatch : Dispatch<AnyAction>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state : AppState) => ({
    itemCount: selectCartItemsCount(state)
});

interface ICartIconProps {
    toggleCartHidden: fArgReturn,
    itemCount: number
}

const CartIcon = ({ toggleCartHidden, itemCount }: ICartIconProps) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{ itemCount }</span>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);