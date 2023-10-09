import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import './card.css';

import { IconStripe, OptionStripe } from './utils';

const PaymentCard = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [flag, setFlag] = useState(false);
  const [icon, setIcon] = useState('');

  const [cardHolder, setCardHolder] = useState('');

  const handleChangeSide = (e) => {
    setFlag(!flag);
  };

  const handleChangeInput = (e) => {
    return setIcon(e.brand);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) alert('Please enter full input .');

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement)
      alert('Please enter full input');

    const { token, error } = await stripe.createToken(cardNumberElement, {
      name: cardHolder,
      address_line1: '123 Address St',
      address_city: 'City',
      address_state: 'State',
      address_zip: '12345',
    });

    if (error) {
      if (error.code === 'incomplete_cvc') {
        setFlag(true);
      }

      return alert(error.message);
    }
    setFlag(false);
    return alert(token.id);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-tr to-red-100">
        <div>
          <button
            onClick={handleChangeSide}
            className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
          >
            {flag ? 'Side Two' : 'Side one'}
          </button>
          <button
            onClick={handleSubmit}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Payment
          </button>
        </div>
        {/* Title */}
        <div className="flex justify-center items-center py-12">
          <h2 className="text-3xl text-gray-700 font-bold font-serif">Hover me!</h2>
        </div>

        {/* Card Credit */}
        <div
          id={`${flag ? 'card' : ''}`}
          className="relative w-[400px] h-[288px] rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500 "
          style={{ transition: '0.6s', transformStyle: 'preserve-3d' }}
        >
          {/* Front content */}
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-tr from-gray-900 to-gray-700 transition-all duration-100 delay-200 z-20"
            style={{ transform: 'rotateY(0deg)' }}
          >
            <div className="flex justify-between items-center">
              <img
                src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                alt="Smart card"
                className="w-12"
              />
              {IconStripe(icon) !== '' && (
                <img src={IconStripe(icon)} alt="Visa image" className="w-16" />
              )}
            </div>

            {/* CardNumber */}
            <div>
              <label htmlFor="" className="hidden">
                Card Number
              </label>
              <CardNumberElement
                className="outline-none w-full bg-transparent text-center text-2xl"
                options={OptionStripe('cart_number')}
                onReady={(e) => e.focus()}
                onChange={handleChangeInput}
              />
            </div>

            <div className="w-full flex flex-row justify-between">
              <div className="w-full flex flex-col">
                <label htmlFor="">Holder</label>
              </div>

              <div className="w-1/2 flex flex-col">
                <input
                  type="text"
                  placeholder="Nguyen Van A"
                  value={cardHolder}
                  className="outline-none bg-transparent"
                  onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                />
              </div>
            </div>

            <div className="w-full flex flex-row justify-between">
              <div className="w-full flex flex-col">
                <label htmlFor="">Expiry</label>
              </div>

              <div className="w-1/4 flex flex-col">
                <CardExpiryElement
                  className="outline-none bg-transparent"
                  options={OptionStripe('card_expiry')}
                  onBlur={() => setFlag(true)}
                />
              </div>
            </div>
          </div>

          {/* Back content */}
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center bg-gradient-to-tr from-gray-900 to-gray-700 transition-all z-10"
            style={{ transform: 'rotateY(180deg)' }}
          >
            {/* Band */}
            <div className="w-full h-12 bg-black "></div>

            <div className="px-6 flex flex-col gap-6 justify-center ">
              <div className="flex flex-col items-end">
                <label htmlFor="">CVV</label>
                <CardCvcElement
                  options={OptionStripe('card_cvc')}
                  id="demo"
                  className="outline-none rounded text-black w-full h-8 text-right"
                />
              </div>

              <div className="flex justify-start items-center">
                {IconStripe(icon) !== '' && (
                  <img src={IconStripe(icon)} alt="Visa image" className="w-16" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
