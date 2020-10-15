const fs = require('fs');

const getNotes = () => 
  fs.readFileSync('./notes.txt', 'utf-8', (err, data) => {
    try {
     return data;
    } catch (err) {
      console.log(err);
    }
});

module.exports = getNotes;