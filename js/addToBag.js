// Items can be added to bag.
// Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
// Must be able to list all children who are getting a toy.
// Must be able to list all toys for a given child's name.
// Must be able to set the delivered property of a child, which defaults to false to true.

'use strict';

const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('../bag-o-loot.sqlite', (err) => {
    if(err)
        console.log('Error occured', err);
    console.log('connected');
})

module.exports.addToy = () => {

}

module.exports.getAllChildren = () => {
    
    return new Promise( (resolve, reject) => {

                db.all("SELECT name FROM kids", (err, data) => {
                    if(err)
                        console.log('Error:', err);
                    console.log('data?', data);
                    resolve(data);
                })
    })
}

module.exports.getAllToysForAChild = () => {

}

module.exports.removeAChildsToy = () => {

}

module.exports.deliverToyToChild = () => {

}
