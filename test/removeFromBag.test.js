'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { assert } = chai;
const { createdb } = require('../js/createdb.js');
const { removeAChildsToy } = require('../js/removeFromBag.js');

// Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
describe("Removing a child's toy from the bag module", () => {
  describe('removeAChildsToy', () => {
    it('should be a function', () => {
      assert.isFunction(removeAChildsToy);
    });

    it('should return 1 affected/changed row', () => {
      let obj = { name: 'Jim', toy: 'Bat' };
      return removeAChildsToy(obj).then(data => {
        assert.equal(1, data);
      });
    });
  });
});
