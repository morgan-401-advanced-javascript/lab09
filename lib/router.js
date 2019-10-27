'use strict';

const cwd = process.cwd();
const express = require('express');
const modelFinder = require(`${cwd}/lib/middleware/model-finder.js`);
const router = express.Router();

// TODO: Comment
// middleware that will cause modelFinder.load to run when model param is used
router.param('model', modelFinder.load);

// TODO: Swagger Comment
/**
 * Goes to the homepage
 * @group Home
 * @route GET '/'
 * @security basicAuth
 * @returns {string} 200 Homepage
 * @returns {Error}  500 - Server error
 */
router.get('/', (req, res, next) => {
  res.send('Homepage');
});

// TODO: Swagger Comment
/**
 * Get a list of all in database
 * @group Model
 * @route GET '/models'
 * @security basicAuth
 * @returns {object} 200 {{}, {}}
 * @returns {Error}  500 - Server error
 */
router.get('/models', (req, res, next) => {
  modelFinder.list().then(models => res.status(200).json(models));
});

// TODO: Swagger Comment
/**
 * returns schema for the specific modle specified in parameter
 * @group Model
 * @param {object} :model 
 * @route GET '/model/schema'
 * @security basicAuth
 * @returns {object} 200 {{}}
 * @returns {Error}  500 - Server error
 */
router.get('/:model/schema', (req, res, next) => {
  res.status(200).json(req.model.jsonSchema());
});

// TODO: Swagger Comment
/**
 * Gets all from database for a specific data model
 * @group Model
 * @param {object} :model
 * @route GET '/:models'
 * @security basicAuth
 * @returns {object} 200 {{}, {}}
 * @returns {Error}  500 - Server error
 */
router.get('/:model', handleGetAll);

// TODO: Swagger Comment
/**
 * create new object in specified data model
 * @group Model
 * @param {object} :model
 * @route POST '/:model'
 * @security basicAuth
 * @returns {object} 200 {}
 * @returns {Error}  500 - Server error
 */
router.post('/:model', handlePost);

// TODO: Swagger Comment
/**
 * gets specific object in specified data model
 * @group Model
 * @param {object} :model
 * @param {object} :id
 * @route GET '/:model'
 * @security basicAuth
 * @returns {object} 200 {}
 * @returns {Error}  500 - Server error
 */
router.get('/:model/:id', handleGetOne);

// TODO: Swagger Comment
/**
 * modify specific object in specified data model
 * @group Model
 * @param {object} :model
 * @param {object} :id
 * @route PUT '/:model'
 * @security basicAuth
 * @returns {object} 200 {}
 * @returns {Error}  500 - Server error
 */
router.put('/:model/:id', handlePut);

// TODO: Swagger Comment
/**
 * removes specific object in specified data model
 * @group Model
 * @param {object} :model
 * @param {object} :id
 * @route DELETE '/:model'
 * @security basicAuth
 * @returns {object} 200 {}
 * @returns {Error}  500 - Server error
 */
router.delete('/:model/:id', handleDelete);

// TODO: JSDoc Comment
/**
 * Gets all objects
 * @function handleGetAll
 * @param {} req
 * @param {} res
 * @param {} next
 * @returns {object} 200 {count: any, results: any}
 * @returns {} catch next
 */
function handleGetAll(req, res, next) {
  req.model
    .get()
    .then(data => {
      const output = {
        count: data.length,
        results: data
      };
      res.status(200).json(output);
    })
    .catch(next);
}

// TODO: JSDoc Comment
/**
 * Gets one object
 * @function handleGetOne
 * @param {} req
 * @param {} res
 * @param {} next
 * @returns {object} 200 {result: {}}
 * @returns {} catch next
 */
function handleGetOne(req, res, next) {
  req.model
    .get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
}

// TODO: JSDoc Comment
/**
 * Adds an object
 * @function handlePost
 * @param {} req
 * @param {} res
 * @param {} next
 * @returns {object} 200 {count: any, results: any}
 * @returns {} catch next
 */
function handlePost(req, res, next) {
  req.model
    .create(req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}

// TODO: JSDoc Comment
/**
 * Updates an object
 * @function handlePut
 * @param {} req
 * @param {} res
 * @param {} next
 * @returns {object} 200 {results: {any}}
 * @returns {} catch next
 */
function handlePut(req, res, next) {
  req.model
    .update(req.params.id, req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}

// TODO: JSDoc Comment
/**
 * Deletes an object
 * @function handleDelete
 * @param {} req
 * @param {} res
 * @param {} next
 * @returns {object} 200 {results: {any}}
 * @returns {} catch next
 */
function handleDelete(req, res, next) {
  req.model
    .delete(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(next);
}

module.exports = router;
