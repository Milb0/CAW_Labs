const fs = require('fs');

function readFile(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

const fileName = process.argv[2];

readFile(fileName);
