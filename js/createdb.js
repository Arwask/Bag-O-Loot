'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bag-o-loot.sqlite', err => {
  if (err) console.log('Error occured', err);
});

module.exports.createdb = () => {
  return new Promise((resolve, reject) => {
    db.run('drop table if exists bag');
    db.run('CREATE TABLE IF NOT EXISTS bag ( name text, toy text, goodKid boolean, delivered boolean)', err => {
      if (err) console.log(err);
      resolve('done');
    });
  });
};
