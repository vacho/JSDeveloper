// Never (the imposible type.)
type PaymentMethod = 'CreditCard' | 'PayPal' | 'Crypto' | 'BankTransfer';

interface PaymentRequest {
  amount: number;
  method: PaymentMethod;
}

function processPayment(request: PaymentRequest) {
  switch (request.method) {
    case 'CreditCard':
      console.log(`Processing $${request.amount} via Credit Card...`);
      break;
    case 'PayPal':
      console.log(`Redirecting to PayPal for $${request.amount}...`);
      break;
    case 'Crypto':
      console.log(`Generating wallet address for $${request.amount}...`);
      break;
    case 'BankTransfer':
      console.log(`Providing IBAN for $${request.amount} transfer...`);
      break;
    default:
      /**
       * EXHAUSTIVE CHECK:
       * * Because we have handled all members of the 'PaymentMethod' union,
       * the variable 'request.method' has been "narrowed" down to nothing.
       * Therefore, it is safe to assign it to a variable of type 'never'.
       * * If you add 'ApplePay' to the PaymentMethod type above, this line 
       * will immediately show a RED ERROR because 'ApplePay' cannot be 
       * assigned to 'never'.
       */
      const _exhaustiveCheck: never = request.method;
      throw new Error(`Unhandled payment method: ${_exhaustiveCheck}`);
  }
}

// Example usage
const myPayment: PaymentRequest = {
  amount: 150,
  method: 'CreditCard'
};

processPayment(myPayment);

