const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({

  userId: String,

  courseId: String,

  paymentId: String,

  orderId: String,

  amount: Number,

  purchasedAt: {

    type: Date,

    default: Date.now

  }

});

module.exports = mongoose.model(
  'Purchase',
  purchaseSchema
);