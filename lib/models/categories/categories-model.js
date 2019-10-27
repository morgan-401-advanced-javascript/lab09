'use strict';

const Model = require('../model.js');
const schema = require('./categories-schema.js');

// TODO: JSDoc Comment
/** 
 * @constructor 
 * instantiate a Categories class that extends Model class
*/
class Categories extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Categories;
