import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Token } from 'react-stripe-checkout';

interface IStripeCheckoutButtonProps {
    price: number
}

const StripeCheckoutButton : React.FunctionComponent<IStripeCheckoutButtonProps> = ({price}) => {
    const priceForStripe : number = price * 100;
    const publishableKey : string = 'pk_test_ZL2xekDcZTuJPk2uqkb8u0Jb';

    const onToken = (token : Token) : void => {
        console.log(token);
        alert('payment successful!');
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
    )
}

export default StripeCheckoutButton