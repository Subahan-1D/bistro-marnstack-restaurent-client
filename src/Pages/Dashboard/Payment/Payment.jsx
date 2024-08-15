import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
// Todo : add publishable key
const stripePromise = loadStripe('')
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="payment"
        subHeading="---Please pay to eat---"
      ></SectionTitle>
      <div>
       <Elements stripe={stripePromise}>

       </Elements>
      </div>
    </div>
  );
};

export default Payment;
