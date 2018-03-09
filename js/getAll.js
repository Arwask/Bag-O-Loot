'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bag-o-loot.sqlite', err => {
  if (err) console.log('Error occured', err);
});

// const { getAllChildren } = require('../js/getAll.js');

module.exports.getAllChildren = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT DISTINCT name FROM bag', (err, data) => {
      if (err) console.log('Error:', err);
      resolve(data);
    });
  });
};

module.exports.getAllToysForAChild = kid => {
  return new Promise((resolve, reject) => {
    db.all(`select toy from bag where LOWER(name) = LOWER("${kid}")`, (err, data) => {
      if (err) console.log('Error:', err);
      resolve(data);
    });
  });
};

module.exports.getKid = name => {
  return new Promise((resolve, reject) => {
    db.get(`select * from bag where lower(name) like lower("${name}")`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
