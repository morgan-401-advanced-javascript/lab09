'use strict';

// TODO: JSDoc Comment
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @returns  {object};res.status(404} =>{leterror={error
 */
module.exports = (req, res, next) => {
  let error = { error: 'Resource Not Found' };
  console.log(req)
  res
    .status(404)
    .json(error)
    .end();
};
