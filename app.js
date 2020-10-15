// npm modules
const chalk = require('chalk');

// User defined modules
const read = require('./notes');

const command = process.argv[2];

if (command === 'add') console.log('Adding note!');
else if (command === 'remove') console.log('Removing!');
else console.log('Did not compute...');
