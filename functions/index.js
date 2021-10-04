const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//!app config
const app = express();

//!middlewares
app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(bodyParser.json());

//!api routes
app.get("/", (req, res) => {
  res.status(200).send("hello from firebase functions");
});
// This is your real test secret API key.
const stripe = require("stripe")(
  "sk_test_51JfhxECsXZEi5qonFAVfJ0IQlJZ63iA0gCmpYYRxQHmPDdT2LPQ8hTmf3zkQJHGglpCCiGJLxihETPu5JrGkkKHz00RtlwZu24"
);

const YOUR_DOMAIN = "http://localhost:3000/";

app.get("/get-prices", async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      expand: ["data.product"],
    });

    const data = prices.data.filter((price) => price.product.active == true);
    let tweakedData = data.map((data)=>{
      return {
        id:data.id,
        productId:data.product.id,
        productPrice:data.unit_amount,
        currency:data.currency,
        productImage:data.product.images,
        name:data.product.name,
        recurring:data.recurring.interval,
      }
    })
    console.log('tweakedData');
    res.status(200).send(tweakedData);
  } catch (error) {
    res.status(404).send({ error });
  }
});



exports.app = functions.https.onRequest(app);

