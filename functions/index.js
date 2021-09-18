const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JaJBSSEglmy4cB0zV49hpLDWjH4463kkHdJqNItNfd5XrwxCPXS4HfOpfpUd7sxczImwIcCG25wUViDfvQcI9wZ003EaspBdG"
);

// API

// - Api Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units of the currency
    currency: "inr",
  });

  // Status => 201 (Okay, everything went fine. Also, something is created)
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
// app.listen(3000, (req, res) => {

// })
exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-6c54d/us-central1/api
