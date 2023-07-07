const { readFileSync, writeFileSync } = require('fs');
console.log('start');
// Reading the file
// Two params: path, default encoding=utf8
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// // Creating a new file - overwrites the file if executed again
// writeFileSync(
//     './content/result-sync.txt', 
//     `Here is the result: ${first}, ${second}`
// )

// Appending to a file
writeFileSync(
    './content/result-sync.txt', 
    `\nA new line has been appended to the previous content`,
    { flag: 'a' } // flag: a - append
)
console.log('done with this task');
console.log('starting the next one');