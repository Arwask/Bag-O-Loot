'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bag-o-loot.sqlite', err => {
  if (err) console.log('Error occured', err);
});

module.exports.setDelivered = name => {
  return new Promise((resolve, reject) => {
    db.run(`update bag set delivered = 'true' where lower(name) like lower("${name}")`, function(err) {
      if (err) return reject(err);
      resolve(this.changes);
    });
  });
};
