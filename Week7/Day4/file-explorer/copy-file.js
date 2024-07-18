const fs = require('fs');

const sourceFilePath = 'source.txt';
const destinationFilePath = 'destination.txt';

fs.readFile(sourceFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading ${sourceFilePath}:`, err);
        return;
    }

    fs.writeFile(destinationFilePath, data, (err) => {
        if (err) {
            console.error(`Error writing to ${destinationFilePath}:`, err);
            return;
        }
        console.log(`Successfully copied content from ${sourceFilePath} to ${destinationFilePath}`);
    });
});
