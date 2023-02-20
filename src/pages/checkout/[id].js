import React, { useEffect, useState } from "react";
import CheckoutForm from "@/components/form/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Box, Divider, Grid } from "@mui/material";
import PropagateLoader from "react-spinners/PropagateLoader";
import Text from "@/components/Typography/Text";
import Head from "next/head";
import { useRouter } from "next/router";

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");
const router = useRouter()

console.log("value", router);
  const getPaymentIntent = async () => {
    try {
      const response = await axios.post("/api/stripe_intent", { amount: 3000 });
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
  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
      variables: {
        colorPrimary: "#aa076b",
        colorBackground: "#ffffff",
        colorText: "#30313d",
        colorDanger: "#df1b41",
        fontFamily: "Ideal Sans, system-ui, sans-serif",
        spacingUnit: "3px",
        borderRadius: "10px",
      },
    },
  };

  // console.log("options", options);
  return (
  <>
  <Head>
    <title>Checkout</title>
    <link rel="icon" href="/favicon.svg" />
  </Head>
    <Grid
      container
      height={"100vh"}
      alignItems="center"
      // justifyContent="center"
    >
      <Grid item xs />
      <Grid item xs={4} width="100%" className="border-r-2 border-gray">
        {stripe && clientSecret ? (
          <Elements options={options} stripe={stripe}>
            <CheckoutForm  paymentIntent={paymentIntent} />
          </Elements>
        ) : ( ""
          // <PropagateLoader color="#aa076b" />
        )}
      </Grid>
      <Grid item xs={4} p={4} >
        <Box>
          Product
        </Box>
        <Divider />
        <Box py={2}>
        <div style={{display:"flex", padding: "2px"}}>
          <Text>Tax</Text>
          <Text sx={{ marginLeft: "auto" }}>$</Text>
        </div>
        <div style={{display:"flex", padding: "2px"}}>
          <Text>Subtotal</Text>
          <Text sx={{ marginLeft: "auto" }}>$</Text>
        </div>
        </Box>
        <Divider />
      </Grid>
      <Grid item xs />
    </Grid></>
  );
}

export default CheckoutPage;
