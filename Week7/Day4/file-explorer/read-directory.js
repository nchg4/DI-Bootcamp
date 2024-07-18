const fs = require('fs');

const directoryPath = './source.txt';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error(`Error reading directory ${directoryPath}:`, err);
        return;
    }

    console.log(`Files in directory ${directoryPath}:`);
    files.forEach(file => {
        console.log(file);
    });
});
