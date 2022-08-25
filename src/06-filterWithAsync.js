const { waitThen } = require("./wait");

const data = [1, 2, 3, 4];
const even = (x) => x % 2 === 0;
const waitThenEven = (x) => waitThen(200, even, x);

//Broken don't do that
const onlyEven = data.filter(waitThenEven);
console.log(onlyEven);
// => [1, 2, 3, 4]
