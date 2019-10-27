'use strict';

const Model = require('../model.js');
const schema = require('./products-schema.js');

// TODO: JSDoc Comment
/**
 * @constructor instantiates the Products class that extends Model
 * 
 */
class Products extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Products;
