import React, { useEffect, useState } from "react";
import CheckoutForm from "@/components/form/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import "@stripe/stripe-js";
import axios from "axios";
import { Grid } from "@mui/material";
import PropagateLoader from 'react-spinners/PropagateLoader' 
const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");
  console.log("stripePromise", stripe);

  const getPaymentIntent = async () => {
    try {
      const response = await axios.post("api/stripe_intent", { amount: 3000 });
      const { client_secret, id } = response.data;
      setPaymentIntent(id);
      setClientSecret(client_secret);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getPaymentIntent();
  }, []);
  console.log("clientSecret", clientSecret);
  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
      variables: {
        colorPrimary: "#0570de",
        colorBackground: "#ffffff",
        colorText: "#30313d",
        colorDanger: "#df1b41",
        fontFamily: "Ideal Sans, system-ui, sans-serif",
        spacingUnit: "2px",
        borderRadius: "4px",
      },
    },
  };

  // console.log("options", options);
  return (
    <Grid
      container
      height={"100vh"}
      alignItems="center"
      justifyContent="center"
    >
      <Grid xs={6} mx={2}>
        {stripe && clientSecret ? (
          <Elements options={options} stripe={stripe}>
            <CheckoutForm paymentIntent={paymentIntent} />
          </Elements>
        ) : (
          <PropagateLoader color="#aa076b" />
        )}
      </Grid>
    </Grid>
  );
}

export default CheckoutPage;
