//* Old Way *//
// const items = [ 'item1', 'item2' ]
// const person = {
//     name: 'bob',
// }
// module.exports = {items, person}

//* New Way *//
module.exports.items = [ 'item1', 'item2' ]
const person = {
    name: 'bob',
}
module.exports.singlePerson = person