// Module variables
const fs = require('fs');
const chalk = require('chalk');

// List Notes Method
const listNotes = () => {
  const notes = loadNotes();
  notes.length > 0 ? 
    console.log(
      'Here\'s a list of all your notes:\n\n', 
      ...notes.map(note => note.title + '\n'))
    : console.log('\nNo saved notes!\n');
};

// Get Note Method
const getNote = (title) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title) ;
  if (duplicateNote) {
    console.log(success('\nHere\'s your note!\n'));
    console.log(duplicateNote['body'], '\n\n~End note.\n');
  } else {
    console.log(fail('Note has not been found in database... Type "list" to view notes or --help for options.'));
  }
};

// Add Note Method
const addNote = (title, body) => {
  const notes = loadNotes(); // Load notes into variable
  // Construct a new array so we can check if a duplicate has been found 
  // using the filter method
  const duplicateNote = notes.find(note => note.title === title); 

  // Check if duplicate is found if array has an element inside
  if (duplicateNote) {
    console.log(fail('\nNote title duplicate found... Please try again.\n'));

  } else {// Log if failed the duplicate check.
    notes.push({
      title: title,
      body: body,
    });
    
    saveNotes(notes); // Save to file --> log it to console.
    console.log(success('\nNew note added!\n'));
  }
  
};

// Remove Note Method
const removeNote = (title) => {
  const notes = loadNotes(); // Load notes into variable
  const newNotes = notes.filter(note => note.title !== title);
  // Similar to the add filter, except we're duplicating an array
  // with the elements left over after the remove.

  
  if (newNotes < notes){ // Check if array has changed
    try { // Save new array --> log it to console
      saveNotes(newNotes);
      console.log(success(`\nRemoved: ${title}!\n`));
    } catch(e) { // Catch any error that may occur (who knows.)
      console.log('\nSomething went wrong... Could not remove note: ' + e);
    }
  } else {
    console.log(fail('\n"', title, '" - is not inside the database...\n'));
  }
};

// Utility Functions
const saveNotes = (notes) => { // Save to database after stringifying the object array
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try { // Load buffer object from notes.json and stringify --> return JavaScript object
    const dataBuffer = fs.readFileSync('notes.json').toString();
    return JSON.parse(dataBuffer);
  } catch(e) {
    return []; // Default object to show the user if the object list is empty
  }
};

// Colorful logs 
const fail = (...strings) => chalk.red.inverse(strings.join(''));
const success = (...strings) => chalk.green.inverse(strings.join('')); 

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  getNote: getNote
};