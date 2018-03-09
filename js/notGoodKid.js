'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bag-o-loot.sqlite', err => {
  if (err) console.log('Error occured', err);
});

module.exports.setNotAGoodKid = name => {
  return new Promise((resolve, reject) => {
    db.run(`update bag set goodKid = 'false' where lower(name) = lower("${name}")`, function(err) {
      if (err) return reject(err);
      resolve(removeKid(name));
    });
  });
};

const removeKid = name => {
  return new Promise((resolve, reject) => {
    console.log(name);
    db.run(`delete from bag where lower(name) like lower("${name}")`, function(err) {
      if (err) return reject(err);
      console.log('??', this.changes);
      resolve(this.changes);
    });
  });
};
