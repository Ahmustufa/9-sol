import React, { useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
  LinkAuthenticationElement,
  PayButtonElement,
} from "@stripe/react-stripe-js";
import BlackButton from "../buttons/BlackButton";
import Text from "../Typography/Text";
import { Box } from "@mui/material";

function CheckoutForm(props) {
  // const { paymentIntent } = props;
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const { error, paymentIntent } = await stripe.confirmCardPayment(
    //   props.paymentIntent,
    //   {
    //     payment_method: {
    //       card: elements.getElement(PaymentElement),
    //     },
    //   }
    // );
    // console.log(paymentIntent);
    // if (error) {
    //   console.log(error.message);
    // } else if (paymentIntent.status === "succeeded") {
    //   console.log("Payment succeeded!");
    // }
  };
  // useEffect(() => {
  //   if (elements) {
  //     const paymentElement = elements.getElement(PaymentElement);
  //     paymentElement.on("change", (event) => {
  //       if (event.error) {
  //         console.log("Error:", event.error.message);
  //         // handle error here
  //       }
  //     });
  //   }
  // }, [elements]);
  // const paymentElementOptions = {
  //   layout: "tabs",
  // };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {props.paymentIntent && (
        <div >
          <Text variant="h4" textAlign="center">
            Payment details
          </Text>
          <PaymentElement />
          <BlackButton disabled={!stripe}>Submit</BlackButton>
        </div>
      )}
    </Box>
  );
}

export default CheckoutForm;
