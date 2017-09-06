'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../bag-o-loot.sqlite', (err) => {
    if(err)
        console.log('Error occured', err);
    console.log('connected');
    db.run('CREATE TABLE IF NOT EXISTS kids( name text, toy text, goodKid boolean, delivered boolean)', (err) => {
        if(err) 
            console.log(err);
    });
})


const [,,...args] = process.argv;

const { addToy, getAllChildren } = require('./addToBag.js');
// const { removeFromDatabase } = require('./removeFromBag.js');
switch(args[0]) {
    case 'add':
         setTimeout( () => {
            addToy({name: args[1], toy: args[2]})
            }, 500);
         break;
    case 'ls':
            setTimeout( () => {
                getAllChildren()
            }, 500);
            break;
}