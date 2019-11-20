'use strict';

// Get the current working directory for the application
const cwd = process.cwd();

// Prepare the Express app
const express = require('express');
const app = express();

// External Resources
const mongoose = require('mongoose');
const errorHandler = require(`${cwd}/lib/middleware/500.js`);
const notFound = require(`${cwd}/lib/middleware/404.js`);
const router = require(`${cwd}/lib/router.js`);

// TODO: Comment
//  It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// TODO: Comment
//  It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));

// TODO: Comment
// tells the app to use router middleware
app.use(router);

// TODO: Comment
// error handling middleware
app.use(notFound);
app.use(errorHandler);

// TODO: JSDoc Comment
/**
 * tells the server where to run and mongoose to connect
 * @function start
 * @param  {} port||process.env.PORT||3000
 */
const start = port => {
  app.listen(port || process.env.PORT || 3000, () => {
    console.log(`Server Running on Port ${port || process.env.PORT || 3000}`);
  });

  const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(process.env.MONGODB_URI, config);
};

module.exports = { server: app, start: start };
