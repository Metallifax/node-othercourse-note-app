const validator = require('validator');
const read = require('./notes');
const chalk = require('chalk');

getNotes = () => console.log(`Your notes...\n${read()}`);
getSuccess = () => console.log(chalk.red('Su') + chalk.green('cce') + chalk.blue('ss!'));

getSuccess();
