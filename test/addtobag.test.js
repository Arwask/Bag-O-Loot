'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { assert } = chai;
const { createdb } = require('../js/createdb.js');
const { addToy, getToy } = require('../js/addToBag.js');

describe('bagLoot', () => {
  it('should be a function', () => {
    assert.isFunction(addToy);
  });
  // Items can be added to bag.
  describe('addToy', () => {
    beforeEach(done => {
      createdb().then(() => {
        done();
      });
    });
    let obj = {
      name: 'Susan',
      toy: 'Doll',
      goodKid: true,
      delivered: false
    };

    it('should return an object', () => {
      return addToy(obj).then(data => {
        assert.isObject(data);
      });
    });

    it('should add an item', () => {
      let expected = { id: 1 };
      return addToy(obj).then(data => {
        assert.deepEqual(expected, data);
      });
    });
  });

  describe('getToy', () => {
    it('should be a function', () => {
      assert.isFunction(getToy);
    });

    it('should not return anything before adding a toy', () => {
      let str = getToy();
      console.log(str);
      assert.isUndefined(str);
    });
  });
});
