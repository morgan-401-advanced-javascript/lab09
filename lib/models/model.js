'use strict';

// TODO: JSDoc Comment
/**
 * @constructor
 * instantiates the Model schema
 */
class Model {
  constructor(schema) {
    this.schema = schema;
  }

  // TODO: JSDoc Comment
  /**
 * @function jsonSchema
 * @returns {object}
 */
  jsonSchema() {
    console.log(typeof this.schema.jsonSchema);
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }

  // TODO: JSDoc Comment
  /**
   * @function get
   * @param  {object} _id
   * @return  {object} this.schema.find(queryObject)
   */
  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  // TODO: JSDoc Comment
  /**
   * @function create
   * @param  {object} record
   * @returns {object} newRecord.save()
   */
  create(record) {
    console.log('r', record);
    let newRecord = new this.schema(record);
    console.log('n', newRecord);
    return newRecord.save();
  }

  // TODO: JSDoc Comment
  /**
   * @function update
   * @param  {object} _id
   * @param  {object} record
   * @returns {object} this.schema.findByIdAndUpdate(_id, record, { new: true })
   */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  // TODO: JSDoc Comment
  /**
   * @function delete
   * @param  {object} _id
   * @returns  {object} this.schema.findByIdAndDelete(_id)
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;
