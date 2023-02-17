import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  LinkAuthenticationElement,
  AddressElement,
  // PayButtonElement,
} from "@stripe/react-stripe-js";
import BlackButton from "../buttons/BlackButton";
import Text from "../Typography/Text";
import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";
import DiabledButton from "../buttons/DiabledButton";
import Link from "next/link";
function CheckoutForm(props) {
  // const { paymentIntent } = props;
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoading(true);
    const response = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:4000/checkout/status",
      },
    });


    if (response.error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setLoading(false)
      setErrorMessage(response.error.message);
    } else {
      setLoading(false);
    }
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {/* <Text variant="h4" textAlign="center" pb={4}>
        Payment details
      </Text> */}
      {props.paymentIntent && (
        <div className="flex flex-col justify-center">
          <Box p={2}>
            <Box display="flex" py={1}>
              <Text className="font-bold">Contact Information</Text>
              <Text style={{ marginLeft: "auto" }}>
                Already have an account?{" "}
                <Link href="/login" style={{ color: "blue" }}>
                  Log in
                </Link>
              </Text>
            </Box>
            <LinkAuthenticationElement />
            <AddressElement options={{ mode: "billing" }} />
          </Box>
          <Box p={2}>
            <Text className="font-bold" py={1}>
              Card Information
            </Text>
            <PaymentElement
              options={{ paymentMethodOrder: ["card"] }}
              // onReady={(e) => setPaymentMethod(e)}
            />
          </Box>
          {/* {errorMessage? <Box className="bg-gray rounded-lg p-2" mx={2} >
            <p style={{ color: "red", fontSize: 12 }}>{errorMessage}</p>
          </Box> : ""} */}
          <Box px={2} pb={3}>
            {loading ? (
              <DiabledButton disabled className="flex items-center">
                Loading...
                {/* <span style={{ padding: "0px 20px" }}>
                  <CircularProgress size={30} color="primary" />
                </span> */}
              </DiabledButton>
            ) : (
              <DiabledButton onClick={handleSubmit} disabled={!elements && !stripe }>
                Submit
              </DiabledButton>
            )}
          </Box>
        </div>
      )}
    </Box>
  );
}

export default CheckoutForm;

