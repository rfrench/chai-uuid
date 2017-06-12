'use strict';

module.exports = function (chai, utils) {
  var Assertion = chai.Assertion;
  var assert = chai.assert;

  /**
   * Returns a valid regex for validating the UUID
   * @param  {String} version
   * @return {Regex}
   */
  function getRegEx(version) {
    switch(version.toLowerCase())
    {
      case 'v1':
        return /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
      case 'v2':
        return /^[0-9A-F]{8}-[0-9A-F]{4}-[2][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
      case 'v3':
        return /^[0-9A-F]{8}-[0-9A-F]{4}-[3][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
      case 'v4':
        return /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
      case 'v5':
        return /^[0-9A-F]{8}-[0-9A-F]{4}-[5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
      default:
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    }
  }

  /**
   * Validates a uuid
   * @param  {String} version
   */
  function uuid(version) {
    var v = (version) ? version : '';

    // verify its a valid string
    this.assert(
      (typeof this._obj === 'string' || this._obj instanceof String),
      'expected #{this} to be of type #{exp} but got #{act}',
      'expected #{this} to not be of type #{exp}',
      'string',
      typeof(this._obj)
    );

    // assert it is a valid uuid
    var regex = getRegEx(v);
    this.assert(
      regex.test(this._obj),
      'expected #{this} to be a valid UUID ' + v,
      'expected #{this} to not be a UUID ' + v
    );    
  }

  // should / expect methods for chai
  Assertion.addMethod('uuid', uuid)
  Assertion.addMethod('guid', uuid)

  // assert methods for chai
  assert.uuid = function (val, exp) {
    new chai.Assertion(val).to.be.a.uuid(exp);
  };
  assert.guid = assert.uuid;
};
