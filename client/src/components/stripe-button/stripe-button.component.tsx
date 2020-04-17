import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Token } from 'react-stripe-checkout';
import axios from 'axios';
import {errors, IStripeError} from 'stripe';

interface IStripeCheckoutButtonProps {
    price: number
}

const StripeCheckoutButton : React.FunctionComponent<IStripeCheckoutButtonProps> = ({price}) => {
    const priceForStripe : number = price * 100;
    const publishableKey : string = 'pk_test_ZL2xekDcZTuJPk2uqkb8u0Jb';

    const onToken = (token : Token) : void => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response =>{
            alert('Payment Successful');
        }).catch((error : IStripeError) => {
            console.error('Payment error: ', error.message);
            alert('There was an issue with your payment. Please ensure you have entered the correct credit card details.')
        });
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton