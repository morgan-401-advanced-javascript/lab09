'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

// TODO: Comment
// todo schema that declares what is required and the specific types in the object
const todo = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String },
  assignee: { type: String, required: true },
  difficulty: { type: Number, required: true, default: 3 },
  complete: { type: Boolean, required: true, default: false }
});

// TODO: Comment
// this exports todo data model
module.exports = mongoose.model('todo', todo);
