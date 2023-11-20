const fs = require('fs');

/* Part 01
const textToSave = process.argv[2];
fs.writeFile('f.txt', textToSave, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('The file has been saved!');
  }
}); */


const destinationFile = process.argv[2];
const textToSave = process.argv[3];

/* Part 02
fs.writeFile(destinationFile, textToSave, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('The file has been saved!');
  }
}); */


fs.writeFile(destinationFile, textToSave, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('The file has been saved!');
    
    fs.readFile(destinationFile, 'utf8', (readErr, data) => {
      if (readErr) {
        console.error('Error reading file:', readErr);
      } else {
        console.log('File contents:', data);
      }
    });
  }
});
