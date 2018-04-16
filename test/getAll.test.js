'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { assert } = chai;
const { createdb } = require('../js/createdb.js');
const { getAllChildren, getAllToysForAChild } = require('../js/getAll.js');

// Must be able to list all children who are getting a toy.
describe('GetAllChildren', () => {
  it('should be a function', () => {
    assert.isFunction(getAllChildren);
  });

  it('should return an array', () => {
    return getAllChildren().then(data => {
      //you do return to handle the error properly otherwise it will throw unhandled rejection error! NO need for catch.
      assert.isArray(data);
    });
  });
});

// Must be able to list all toys for a given child's name.
describe('GetAllToysForAChild', () => {
  it('should be a function', () => {
    assert.isFunction(getAllToysForAChild);
  });

  it('should return an array', () => {
    let kid = 'susan';
    return getAllToysForAChild(kid).then(data => {
      assert.isArray(data);
    });
  });
});
