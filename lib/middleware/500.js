'use strict';

// TODO: JSDoc Comment
/**
 * @param  {} err
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {object};res.status(500} =>{leterror={error
 */
module.exports = (err, req, res, next) => {
  let error = { error: err };
  res
    .status(500)
    .json(error)
    .end();
};
