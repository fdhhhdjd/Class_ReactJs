const inputStyles = {
  iconColor: '#F99A52',
  color: '#CFD7DF',
  lineHeight: '48px',
  fontWeight: 400,
  fontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", sans-serif',
  fontSize: '15px',
  '::placeholder': {
    color: '#CFD7DF',
  },
};

const cvvInputStyles = {
  ...inputStyles,
  color: '#000',
  '::placeholder': {
    color: '#000',
  },
};

export const CART_NUMBER = {
  showIcon: true,
  style: {
    base: inputStyles,
  },
};

export const CART_EXPIRY = {
  style: {
    base: inputStyles,
  },
};

export const CART_CVC = {
  style: {
    base: cvvInputStyles,
  },
};
