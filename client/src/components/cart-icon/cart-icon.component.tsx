import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { Dispatch, AnyAction } from 'redux';
import { fArgReturn } from '../../types/FunctionTypes';
import { AppState } from '../../redux/_root-reducer';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingbag.svg';

import './cart-icon.styles.scss';

interface IStateProps {
    itemCount: number
}

interface IDispatchProps {
    toggleCartHidden: fArgReturn
}

type CartIconProps = IStateProps & IDispatchProps;

const CartIcon = ({ toggleCartHidden, itemCount }: CartIconProps) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{ itemCount }</span>
    </div>
);

const mapDispatchToProps = (dispatch : Dispatch<AnyAction>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector<AppState, IStateProps>({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);