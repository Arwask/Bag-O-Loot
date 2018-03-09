'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { assert } = chai;
const { createdb } = require('../js/createdb.js');
const { setNotAGoodKid } = require('../js/notGoodKid.js');

describe('set good kid to not a good kid module', () => {
  describe('setNotAGoodKid', () => {
    it('should be a function', () => {
      assert.isFunction(setNotAGoodKid);
    });

    it('should return number of rows changed', () => {
      return setNotAGoodKid().then(data => {
        assert.isNumber(data);
      });
    });
  });
});
