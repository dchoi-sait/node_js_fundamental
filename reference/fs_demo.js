const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// Create file and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
//     if (err) throw err;
//     console.log('File written to...');
// });


// File append
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Greetings from Earth', (err) => {
//     if (err) throw err;
//     console.log('File appended...');
// });

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'renamed.txt'),
    (err) => {
        if (err) throw err;
        console.log('file renamed');
    });