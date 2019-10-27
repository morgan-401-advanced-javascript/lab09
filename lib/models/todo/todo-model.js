'use strict';

const Model = require('../model.js');
const schema = require('./todo-schema.js');

// TODO: JSDoc Comment
/** 
 * @constructor 
 * instantiate a Todo class that extends Model class
*/
class Todo extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Todo;
