import React, {useState, useEffect} from 'react';
import {useStripe} from '@stripe/react-stripe-js';
import { Box, Divider, Grid } from '@mui/material';
import styled from 'styled-components';
import Text from '../Typography/Text';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const PaymentStatus = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve the PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Success! Payment received.');
            break;

          case 'processing':
            setMessage("Payment processing. We'll update you when payment is received.");
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage('Payment failed. Please try another payment method.');
            break;

          default:
            setMessage('Something went wrong.');
            break;
        }
      });
  }, [stripe]);


  return (
    <StyledSection>
  {message? <Grid container display="flex" alignItems="center" justifyContent="center">
    <Grid item xs={6} >
        <Box className='p-2 bg-white shadow-2xl rounded-xl'>
        <Box className='flex flex-col items-center '>
        <CheckCircleIcon sx={{fontSize: 90, color: "#4CC94C"}} />
        <Text variant='h4' color="#4CC94C" className="font-bold">{message}</Text>
        </Box>
        {/* <div style={{marginTop: 20, padding: "1rem"}}>
        <Divider  color="black"/>
        </div>
        <Box p={1}display="flex">
        <Text >Tax</Text>
        <Text style={{marginLeft: "auto"}}>$0</Text>
        </Box>
        <Box p={1} display="flex">
        <Text >Amount Paid</Text>
        <Text style={{marginLeft: "auto"}}>$3000</Text>
        </Box> */}
        </Box>
           
    </Grid>
  </Grid> : ""}

    </StyledSection>
  );
};

export default PaymentStatus;

const StyledSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #eeeeee
`