import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Paypal = () => {
  const [show, setShow] = useState(false);
  const [success, SetSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderId, setOrderId] = useState(false);

  const handleCreateOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Book',
            amount: {
              currency_code: 'USD',
              value: 20,
            },
          },
        ],
        application_context: {
          shipping_preference: 'NO_SHIPPING',
        },
      })
      .then((orderId) => {
        setOrderId(orderId);
        return orderId;
      });
  };
  const handleOnApprove = (data, action) => {
    return action.order.capture().then(function (details) {
      const { payer } = details;
      console.info(details);
      SetSuccess(true);
    });
  };

  const handleOnError = (data, action) => {
    setErrorMessage('An error occurred with your payment');
  };

  return (
    <>
      <PayPalScriptProvider
        options={{
          clientId: process.env.REACT_APP_PAYPAL,
        }}
      >
        <h1>Simple Book</h1>
        <span>20$</span>
        <button type="submit" onClick={() => setShow(true)}>
          Buy Now
        </button>
        {show ? (
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={handleCreateOrder}
            onApprove={handleOnApprove}
            onError={handleOnError}
          />
        ) : null}
        {success && <h1>Your Payment has been created successfully, please check email </h1>}
      </PayPalScriptProvider>
    </>
  );
};

export default Paypal;
