const fs = require('fs');

// fs.writeFileSync(1'notes.txt', 'My name is Mud.\n');


//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', 'I live in Mud Town Pennsilvania.\n');