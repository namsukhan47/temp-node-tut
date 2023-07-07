// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')

// 8-mind-grenade.js
require('./7-mind-grenade')

// 6-alternative-flavors.js
console.log(data);

// 5-utils.js
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

// 4-names.js
console.log(names);