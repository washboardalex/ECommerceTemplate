import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { AppState } from '../../redux/_root-reducer';
import ICartItem from '../../types/models/ICartItem';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';


interface ICheckoutPageProps {
    cartItems: Array<ICartItem>,
    total: number
}

const CheckoutPage : React.FunctionComponent<ICheckoutPageProps> = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                Product
            </div>
            <div className='header-block'>
                Description
            </div>
            <div className='header-block'>
                Quantity
            </div>
            <div className='header-block'>
                Price
            </div>
            <div className='header-block'>
                Remove
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />    
            )
        }
        <div className='total'>
            <span>TOTAL: ${total.toFixed(2)}</span>
        </div>
        <div className='test-warning'>
            *USE TEST ONLY FOR PAYMENTS*
            <br />
            4242 4242 4242 4242 - 01 22 - 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector<AppState, ICheckoutPageProps>({
    cartItems: selectCartItems,
    total: selectCartTotal
  });

export default connect(mapStateToProps)(CheckoutPage);