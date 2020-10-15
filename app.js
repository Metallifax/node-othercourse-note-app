// npm modules
const chalk = require('chalk');

// User defined modules
const read = require('./notes');

// Arguments
if (command === 'add') console.log('Adding note!');
else if (command === 'remove') console.log('Removing!');
else console.log('Did not compute...');
