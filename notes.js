const fs = require('fs');

const getNotes = () => console.log('Your notes...');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    
    saveNotes(notes);
    console.log('\nNew note added!\n');
  } else {
    console.log('\nNote title duplicate found... Please try again.\n');
  }
  
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.title !== title);
  if (newNotes < notes){
    try {
      saveNotes(newNotes);
      console.log('\nRemoved: ' + title + '\n');
      console.log(newNotes , '\n');
    } catch(e) {
      console.log('\nSomething went wrong... Could not remove note: ' + e);
    }
  } else {
    console.log('"'+ title + '" - Is not in notes database.');
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json').toString();
    return JSON.parse(dataBuffer);
  } catch(e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};