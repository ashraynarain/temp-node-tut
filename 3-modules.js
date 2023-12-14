// CommonJS, every file is module( by default)
// Modules- Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
// console.log(names)
const data = require('./6-alternative-flavor.js')
require('./7-mind-grenade.js') // once you import a module the code will invole even if a variable is not assigned


// sayHi('susan')
// sayHi(names.John)
// sayHi(names.peter)
