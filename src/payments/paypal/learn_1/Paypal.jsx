import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Paypal = () => {
  const [show, setShow] = useState(false);
  const [success, SetSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderId, setOrderId] = useState(false);

  const handleCreateOrder = (data, actions) => {
    const orderDetails = {
      intent: 'CAPTURE',
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
        brand_name: 'Simple Book Store',
        user_action: 'PAY_NOW',
      },
      locale: 'en_US',
    };

    return actions.order.create(orderDetails).then((orderId) => {
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

  const handleCancel = (data, action) => {
    alert('Cancel payment');
  };

  return (
    <div
      style={{
        maxWidth: '450px',
        minHeight: '200px',
        backgroundColor: 'while',
        borderRadius: '5px',
      }}
    >
      <PayPalScriptProvider
        options={{
          clientId:
            'AfxQpA6p4JZgxcRsjhRIxZKeRvL0qkU8zah4E_XbvNmzjTFrPFH2b_yPjSXnPwapS1QwlPnMXvASpV7O',
          currency: 'USD',
        }}
      >
        <h1>Simple Book</h1>
        <span>20$</span>
        <button type="submit" onClick={() => setShow(true)}>
          Buy Now
        </button>
        {show ? (
          <PayPalButtons
            style={{
              label: 'checkout',
              layout: 'vertical',
              color: 'blue',
              shape: 'rect',
              tagline: false,
              height: 40,
              fontSize: 14,
            }}
            createOrder={handleCreateOrder}
            onApprove={handleOnApprove}
            onError={handleOnError}
            onCancel={handleCancel}
          />
        ) : null}
        {success ? (
          <h1>Your Payment has been created successfully, please check emai </h1>
        ) : (
          <h2>Payment is pending...</h2>
        )}
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
