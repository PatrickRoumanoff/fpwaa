const { waitThen } = require("./wait");

const data = [1, 2, 3, 4];
const even = (x) => x % 2 === 0;
const waitThenEven = (x) => waitThen(200, even, x);

async function filter(a, f) {
  return (
    await Promise.all(
      a.map(async (d) => ((await f(d)) ? d : false))
    )
  ).filter((i) => i);
}

const results = filter(data, waitThenEven);
results.then(console.log);
// => [2, 4]
