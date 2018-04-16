'use strict';

var chai = require('chai');

const { assert } = chai;
const { createdb } = require('../js/createdb.js');
const { setNotAGoodKid, removeKid } = require('../js/notGoodKid.js');

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

describe('set good kid to not a good kid module', () => {
  describe('removeKid', () => {
    it('should be a function', () => {
      assert.isFunction(removeKid);
    });

    it('should return number of rows changed', () => {
      return removeKid().then(data => {
        assert.isNumber(data);
      });
    });
  });
});
