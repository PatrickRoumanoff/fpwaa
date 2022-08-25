const { waitThen } = require("./wait");

const data = [1, 2, 3, 4];
const mult = (a, b) => a * b;
const waitThenMult = (x, y) => waitThen(100, mult, x, y);

const result = data.reduce(
  async (acc, x) => waitThenMult(await acc, x),
  1
);
result.then(console.log);
// => 24
