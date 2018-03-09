'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bag-o-loot.sqlite', err => {
  if (err) console.log('Error occured', err);
});

module.exports.removeAChildsToy = ({ name, toy }) => {
  return new Promise((resolve, reject) => {
    db.run(`delete from bag where LOWER(name) = LOWER("${name}") and LOWER(toy) = LOWER("${toy}")`, function(err) {
      if (err) return reject(err);
      resolve(this.changes);
    });
  });
};
