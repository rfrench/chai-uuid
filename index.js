'use strict';

module.exports = function (chai, utils) {
  const Assertion = chai.Assertion;

  /**
   * Returns a valid regex for validating the UUID
   * @param  {String} version
   * @return {Regex}
   */
  function getRegEx(version) {
    switch(version)
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
   * Validates a UUID
   * @param  {String} version
   */
  Assertion.addMethod('uuid', function(version) {
    const v = (version) ? version : '';

    // verify its a valid string
    this.assert(
      (typeof this._obj === 'string' || this._obj instanceof String),
      'expected #{this} to be of type #{exp} but got #{act}',
      'expected #{this} to not be of type #{exp}',
      'string',
      typeof(this._obj)
    );

    // assert it is a valid uuid
    const regex = getRegEx(v);
    this.assert(
      regex.test(this._obj),
      'expected #{this} to be a valid UUID ' + v,
      'expected #{this} to not be a UUID ' + v
    );
  });
};