import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import PaymentStatus from '@/components/payment/PaymentStatus';
const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

function Status() {
  return (
    <Elements stripe={stripe}>
      <PaymentStatus/>
    </Elements>
  )
}

export default Status
