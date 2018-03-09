'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { assert } = chai;
const { createdb } = require('../js/createdb.js');
const { setDelivered } = require('../js/deliverToy.js');

// Must be able to set the delivered property of a child, which defaults to false, to true.
describe('Deliver Toy To a Child', () => {
  describe('setDelivered', () => {
    it('should be a function', () => {
      assert.isFunction(setDelivered);
    });

    it('should return number of row affected/changed', () => {
      return setDelivered().then(data => {
        assert.isNumber(data);
      });
    });
  });
});
