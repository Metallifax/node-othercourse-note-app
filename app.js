const validator = require('validator');
const read = require('./notes');
const chalk = require('chalk');

// console.log(validator.isURL('google.com'));
getNotes = () => console.log(`Your notes...\n${read()}`);
getSuccess = () => console.log(chalk.red('Su') + chalk.green('cce') + chalk.blue('ss!'));

getSuccess();
