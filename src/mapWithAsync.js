const { waitThen } = require("./wait");

const data = [1, 2, 3, 4];
const double = x => x * 2;

const waitThenDouble = x => waitThen(200, double, x);

const doubled = data.map(waitThenDouble);
console.log(doubled);
// => [Promise, Promise, Promise, Promise]

Promise.all(doubled).then(console.log);
// => [2, 4, 6, 8]
