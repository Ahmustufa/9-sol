import Stripe from "stripe";
import clientPromise from "@/lib/mongodb";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

const handler = async (req, res) => {
  const client = await clientPromise;

  const customer = await stripe.customers.create();
  // console.log("customer", customer);
  const { amount, payment_intent_id } = req.body;
  if (payment_intent_id) {
    try {
      // If a payment_intent_id is passed, retrieve the paymentIntent
      const current_intent = await stripe.paymentIntents.retrieve(
        payment_intent_id
      );
      // If a paymentIntent is retrieved update its amount
      if (current_intent) {
        const updated_intent = await stripe.paymentIntents.update(
          payment_intent_id,
          {
            amount: amount,
          }
        );
        res.status(200).json(updated_intent);
        return;
      }
    } catch (e) {
      //Catch any error and return a status 500
      if (e.code !== "resource_missing") {
        const errorMessage =
          e instanceof Error ? e.message : "Internal server error";
        res.status(500).json({ statusCode: 500, message: errorMessage });
        return;
      }
    }
  }
  try {
    // Create PaymentIntent
    const params = {
      customer: customer.id,
      amount: amount,
      currency: "usd",
      setup_future_usage: "off_session",
      description: "Payment description",
      automatic_payment_methods: {
        enabled: true,
      },
    };
    const db = client.db("9Sol");

    const payment_intent = await stripe.paymentIntents.create(params);
    // let newCustomer = await db.collection("customers").insertOne(payment_intent);
    // Return the payment_intent object
    // console.log("payment_intent", payment_intent);
    res.status(200).json(payment_intent);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }
 
};
export default handler;
