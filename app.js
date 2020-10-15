// npm modules
const yargs = require('yargs');

// User defined modules
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note (node app.js remove --title="title" --body="My awesome note body.")',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  describe: 'Remove a note (node app.js remove --title="title")',
  handler: function(argv){
    notes.removeNote(argv.title);
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function(){
    notes.getNotes();
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Show all notes',
  handler: function(){
    console.log('Here\'s your notes!');
  }
});

yargs.parse();