'use strict';

const mongoose = require('mongoose');

// TODO: Comment
// categories schema that declares what is required and the specific types in the object
// 
const categories = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } },
);

// TODO: Comment
// This declares a virtual tasks on the categories
categories.virtual('tasks', {
  ref: 'todo',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

// TODO: JSDoc Comment
/**
 * Function that populates the virtual tasks
 * @returns {object} {ref: 'todo', localField: 'name', foreignField: 'category', justOne: false}
 * @returns console.error
 */
const populateTasks = function() {
  try {
    this.populate('tasks');
  } catch (e) {
    console.error('Find Error', e);
  }
};

// TODO: Comment
// pre middleware that will populate the tasks for categories 
categories.pre('find', populateTasks);

// TODO: Comment
// this exports categories data model
module.exports = mongoose.model('categories', categories);
