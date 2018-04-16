#! node

('use strict');

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bag-o-loot.sqlite', err => {
  if (err) console.log('Error occured', err);
});

const { createdb } = require('./createdb.js');

const [, , ...args] = process.argv;

const { addToy } = require('./addToBag.js');
const { setDelivered } = require('./deliverToy.js');
const { removeAChildsToy } = require('./removeFromBag.js');
const { setNotAGoodKid, removeKid } = require('./notGoodKid.js');
const { getAllChildren, getAllToysForAChild } = require('./getAll.js');

const printAllOptions = () => {
  return [
    'lootbag add [toy] [name] : to add a toy',
    'lootbag remove [name] [toy] : to remove a toy',
    'lootbag ls : to list name of all the children',
    'lootbag ls [name] : list of toys for the child',
    'lootbag delivered [name] : to set the delivery property on a child as delivered',
    'lootbag naughty [name] : to set a kid as naughty',
    'lootbag naughty [name] -r : to set a kid as naughty and remove all the toys for that kid',
    'lootbag rebuild : to rebuild database with few data rows'
  ];
};

switch (args[0]) {
  case 'add':
    if (args[1] && args[2]) {
      addToy({ name: args[2], toy: args[1], goodKid: true, delivered: false }).then(data => {
        console.log('Added');
      });
    } else console.log('Incomplete information : lootbag add [toy] [name]');
    break;

  case 'ls':
    if (args[1]) {
      getAllToysForAChild(args[1]).then(data => {
        if (data.length > 0) {
          // if data comes back
          data.forEach(kid => {
            console.log(kid.toy);
          });
        } else console.log('No such kid');
      });
    } else {
      getAllChildren().then(data => {
        data.forEach(kid => {
          console.log(kid.name);
        });
      });
    }
    break;

  case 'remove':
    if (args[1] && args[2]) {
      removeAChildsToy({ name: args[1], toy: args[2] }).then(data => {
        console.log('Removed');
      });
    } else console.log('Incomplete information : lootbag remove [name] [toy]');
    break;

  case 'delivered':
    setDelivered(args[1]).then(data => {
      console.log('Changed');
    });
    break;

  case 'help':
    let ops = printAllOptions();
    ops.forEach((option, i) => {
      console.log(`${++i}) ${option}`);
    });
    break;

  case 'rebuild':
    createdb().then(() => {
      console.log('Database rebuilt');
    });
    break;

  case 'naughty':
    if (args[1] && args[2]) {
      removeKid(args[1]).then(data => {
        if (data == 0) console.log('No such kid. Try again!');
        else console.log(`${data} ${data > 1 ? 'toys' : 'toy'} removed`);
      });
    } else if (args[1]) {
      setNotAGoodKid(args[1]).then(data => {
        console.log(`${args[1]} set as a naughty kid.`);
      });
    } else console.log('Not a right command. Type lootbag help for more info. ');
    break;

  default:
    console.log('Not the right format: type help for more commands');
    break;
}
