import { CART_CVC, CART_EXPIRY, CART_NUMBER } from './constants';

export const OptionStripe = (data) => {
  switch (data) {
    case 'cart_number':
      return CART_NUMBER;

    case 'card_expiry':
      return CART_EXPIRY;

    case 'card_cvc':
      return CART_CVC;

    default:
      break;
  }
};

export const IconStripe = (data) => {
  switch (data) {
    case 'visa':
      return 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png';

    case 'mastercard':
      return 'https://o.remove.bg/downloads/6508a194-9e66-450f-a0a0-62af3a5cde7c/mastercard-logo-credit-card-maestro-payment-card-png-favpng-FEFrp7ARbKDvv3t7yQXEJbai9-removebg-preview.png';

    case 'diners':
      return 'https://o.remove.bg/downloads/c1c48918-6c90-47c4-bab1-d57772535c16/png-transparent-diners-club-international-credit-card-american-express-mastercard-credit-card-blue-text-trademark-removebg-preview.png';

    case 'amex':
      return 'https://o.remove.bg/downloads/ac6d71af-02ca-4310-baa1-186c78ba44c3/american-express-logo-credit-card-payment-png-favpng-8tx6epUgjhQeNcJFzp5fhKgZQ-removebg-preview.png';

    case 'discover':
      return 'https://o.remove.bg/downloads/0f3da8e8-2cfa-43ad-b8de-52467bb47c12/png-clipart-discover-financial-services-discover-card-credit-card-diners-club-international-credit-card-text-rectangle-thumbnail-removebg-preview.png';

    case 'jcb':
      return 'https://o.remove.bg/downloads/b72a935c-0537-4062-bdbb-a95da63d42e5/png-clipart-computer-icons-jcb-co-ltd-credit-card-payment-credit-card-text-payment-removebg-preview.png';
    default:
      return '';
  }
};
