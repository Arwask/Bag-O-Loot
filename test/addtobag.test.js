'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { assert } = chai;
const { createdb } = require('../js/createdb.js');
const { addToy, getToy } = require('../js/addToBag.js');
const { getKid } = require('../js/getAll.js');

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
      let expected = { id: 9 };
      return addToy(obj).then(data => {
        assert.deepEqual(expected, data);
      });
    });

    it('should add all the fields', () => {
      let kidObj = {
        name: 'Joan',
        toy: 'Bicycle',
        goodKid: 'true',
        delivered: 'false'
      };
      return addToy(kidObj).then(() => {
        return getKid(kidObj.name).then(data => {
          assert.deepEqual(kidObj, data);
        });
      });
    });
  });
});
