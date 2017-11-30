const { waitThen } = require("./wait");
const data = [1, 2, 3, 4];
const even = x => x % 2 === 0;
const waitThenEven = x => waitThen(200, even, x);

async function filter(a, f) {
  return a.reduce((acc, x) => acc.then(async a => ((await f(x)) ? a.concat(x) : a)), Promise.resolve([]));
}

const results = filter(data, waitThenEven);
results.then(console.log);
