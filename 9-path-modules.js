const path = require('path')

// path seperator - usually forward slash
console.log(path.sep);

// join method for paths
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

// base name - returns the last portion of a path
const base = path.basename(filePath)
console.log(base);

// resolve - returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);