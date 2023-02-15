import React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

function CheckoutForm(paymentIntent) {
  const stripe = useStripe();
  const elements = useElements();
  if (!stripe || !elements) {
    // Stripe.js has not yet loaded.
    // Make sure to disable form submission until Stripe.js has loaded.
    return;
  }
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
}

export default CheckoutForm;
