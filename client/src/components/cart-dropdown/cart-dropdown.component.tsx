import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps as IReactRouterProps } from 'react-router';

import { fArgVoid } from '../../types/FunctionTypes';
import { AppState } from '../../redux/_root-reducer';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import ICartItem from '../../types/models/ICartItem';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


interface IStateProps {
    cartItems: Array<ICartItem> 
}

interface IDispatchProps {
    toggleCartHidden: fArgVoid
}

type CartDropdownProps = IStateProps & IDispatchProps & IReactRouterProps

const CartDropdown : React.FC<CartDropdownProps> = ({ cartItems, history, toggleCartHidden } ) => {

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length > 0
                    ? cartItems.map(item => <CartItem key={item.id} item={item}/>)
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout');
                    toggleCartHidden();
                }}
            >
                GO TO CHECKOUT
            </CustomButton> 

        </div>
    );
}

const mapStateToProps = createStructuredSelector<AppState, IStateProps>({ 
    cartItems: selectCartItems
});

const mapDispatchToProps = (dispatch : Dispatch<AnyAction>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));