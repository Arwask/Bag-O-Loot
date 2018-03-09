// Items can be added to bag.
// Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
// Must be able to list all children who are getting a toy.
// Must be able to list all toys for a given child's name.
// Must be able to set the delivered property of a child, which defaults to false to true.

'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bag-o-loot.sqlite', err => {
  if (err) console.log('Error occured', err);
});

module.exports.addToy = ({ name, toy, goodKid, delivered }) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO bag VALUES("${name}", "${toy}", "${goodKid}", "${delivered}")`, function(err) {
      if (err) return reject(err);
      resolve({ id: this.lastID });
    });
  });
};

module.exports.getToy = () => {};

module.exports.getAllToysForAChild = () => {};

module.exports.deliverToyToChild = () => {};
