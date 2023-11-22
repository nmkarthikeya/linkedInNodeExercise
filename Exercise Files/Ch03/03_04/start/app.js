// const myModule = require("./myModule");

//Different ways of doing same thing instead of getting the contents of whole module just get what you need
const { inc, dec, getCount } = require("./myModule");

// console.log(myModule.anything);
// myModule.inc();
// myModule.inc();
// console.log(myModule.getCount());

inc();
inc();
inc();
inc();
console.log(getCount());
dec();
dec();
console.log(getCount());