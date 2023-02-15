import React, { useEffect, useState } from "react";
import CheckoutForm from "@/components/form/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripe = loadStripe(
  "pk_test_51LrmO2ExvHTSaBsJ8bJ3X15qUR01gIow6sjcQUdB4U0avz5jAJ1IMDacq1vakBK7fwSCZT6sM9qrYJkfL6IWZick00cg24G0kF"
);
function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");
  console.log("stripePromise", stripe);
  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };
  const getPaymentIntent = async () => {
    try {
      const response = await axios.post("api/stripe_intent", { amount: 3000 });
      console.log(response.data.client_secret);
    } catch (error) {}
  };
  useEffect(() => {
    getPaymentIntent();
    // Create PaymentIntent as soon as the page loads using our local API
    // fetch("api/stripe_intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     amount: 30000,
    //     payment_intent_id: "",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.client_secret));
  }, [clientSecret]);
  console.log("clientSecret", clientSecret);
  return (
    <StyledSection>
      <Elements stripe={stripe} options={options}>
        <CheckoutForm paymentIntent={paymentIntent} />
      </Elements>
    </StyledSection>
  );
}

export default CheckoutPage;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
