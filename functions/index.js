const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQXCJGyL70zgiPvKEkeWzjaWD9xazdpZkBsWorXgGJ1g1lpSnSQDGUQB3kAgqJbahKK1l1VxqVuJ8b06jXxROIC00SoDZvTES');

//Setting up an API

//App config
const app=express();

//Middlewares
app.use(cors({origin: true}))
app.use(express.json());

//API routes
app.get('/',(request,response)=>response.status(200).send('hello world'));

app.post('/payments/create',async (request,response) => {
    const total= request.query.total;

    console.log('Payment Request Received Boom! for this amount>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command 

exports.api=functions.https.onRequest(app);

//Example endpoint

//http://localhost:5001/ecommerce-website-f8cb6/us-central1/api