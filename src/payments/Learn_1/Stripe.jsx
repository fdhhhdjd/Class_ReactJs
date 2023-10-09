import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Stripe() {
  return (
    <div className="App">
      <h1>Page Payment</h1>
      <Elements stripe={stripePromise}>
        {/* <CheckoutForm /> */}
        <PaymentCard />
      </Elements>
    </div>
  );
}

export default Stripe;
