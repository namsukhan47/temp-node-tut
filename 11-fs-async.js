const { readFile, writeFile } = require('fs');
console.log('start');
// // We get the data but in buffer format (not human readable)
// // if we don't specify the encoding
// readFile('./content/first.txt', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`, 
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task');
            }
        )
    })
})
console.log('starting next task');