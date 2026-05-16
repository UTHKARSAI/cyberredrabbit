const express = require('express');

const router = express.Router();

const Razorpay = require('razorpay');

const crypto = require('crypto');

const Purchase = require('../models/Purchase');

const razorpay = new Razorpay({

  key_id: process.env.RAZORPAY_KEY_ID,

  key_secret: process.env.RAZORPAY_KEY_SECRET

});

router.post('/create-order', async (req, res) => {

  try {

    const options = {

      amount: req.body.amount * 100,

      currency: 'INR',

      receipt: 'receipt_order'

    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (err) {

    res.status(500).json(err);

  }

});

router.post('/verify-payment', async (req, res) => {

  try {

    const {

      razorpay_order_id,

      razorpay_payment_id,

      razorpay_signature,

      courseId,

      amount,

      userId

    } = req.body;

    const sign =
      razorpay_order_id +
      "|" +
      razorpay_payment_id;

    const expectedSign = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {

      const purchase = new Purchase({

        userId,

        courseId,

        paymentId: razorpay_payment_id,

        orderId: razorpay_order_id,

        amount

      });

      await purchase.save();

      res.json({
        message: 'Payment Verified Successfully'
      });

    } else {

      res.status(400).json({
        message: 'Invalid Signature'
      });

    }

  } catch (err) {

    res.status(500).json(err);

  }

});

module.exports = router;