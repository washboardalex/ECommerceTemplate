import React, { Dispatch } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { AppState } from '../../redux/_root-reducer';
import ICartItem from '../../models/ICartItem';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


const mapStateToProps = ({ cart: { cartItems } } : AppState) => ({ 
    cartItems 
});


interface ICartDropdownProps {
    cartItems: Array<ICartItem> 
}

const CartDropdown = ({ cartItems } : ICartDropdownProps) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
        </div>
        <CustomButton>
            GO TO CHECKOUT
        </CustomButton> 
    </div>
);

export default connect(mapStateToProps)(CartDropdown);