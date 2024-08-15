import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutFrom = () => {
    const [error,setError] = useState('')
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements){
      return;
    }
    const card = elements.getElement(CardElement);

    if(card === null){
        return ;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    })

     if (error) {
       console.log(" Payment error", error);
       setError(error)
     } else {
       console.log("Payment method", paymentMethod);
       setError('')
     }

  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement>
        options=
        {{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      </CardElement>
      <button  className="btn btn-sm btn-primary mt-4" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600">{error.message}</p>
    </form>
  );
};

export default CheckOutFrom;
