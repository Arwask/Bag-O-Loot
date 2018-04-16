'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bag-o-loot.sqlite', err => {
  if (err) console.log('Error occured', err);
});

module.exports.createdb = () => {
  return new Promise((resolve, reject) => {
    db.run('DROP TABLE IF EXISTS bag');
    db.run('CREATE TABLE IF NOT EXISTS bag ( name text, toy text, goodKid boolean, delivered boolean)', err => {
      if (err) console.log(err);
      resolve(insertData(kids));
    });
  });
};

const insertData = kids => {
  return new Promise((resolve, reject) => {
    kids.forEach(kid => {
      db.run(`insert into bag values("${kid.name}", "${kid.toy}", "true", "false")`, err => {
        if (err) return reject(err);
        resolve(this.lastID);
      });
    });
  });
};
const kids = [
  {
    name: 'Tom',
    toy: 'stuffedBear'
  },
  {
    name: 'Tina',
    toy: 'Doll'
  },
  {
    name: 'Annie',
    toy: 'Ball'
  },
  {
    name: 'Jim',
    toy: 'BaseBall'
  },
  {
    name: 'Jim',
    toy: 'Violin'
  },
  {
    name: 'Hannah',
    toy: 'Cat'
  },
  {
    name: 'Hannah',
    toy: 'Doll'
  },
  {
    name: 'Jim',
    toy: 'Bat'
  }
];
