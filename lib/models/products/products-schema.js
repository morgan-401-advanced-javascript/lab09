'use strict';

const mongoose = require('mongoose');

// TODO: Comment
// products schema that declares what is required and the specific types in the object
const products = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true }
});

// TODO: Comment
// this exports products data model
module.exports = mongoose.model('products', products);
