import express, { Application, Request, Response, NextFunction } from "express";
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import { StripeResource, errors, IStripeError } from "stripe";

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('*', function(req : Request, res : Response) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(
    port, 
    () => console.log('application running on port', port)
);

app.post('/payment', (req : Request, res : Response) => {

    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd',
    };

    stripe.charges.create(body, (stripeErr: IStripeError, stripeRes : StripeResource) =>{
        stripeErr 
            ? res.status(500).send({ err: stripeErr })
            : res.status(200).send({ success: stripeRes });
    })
});
