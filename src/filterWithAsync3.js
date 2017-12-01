const { waitThen } = require("./wait");
const data = [1, 2, 3, 4];
const even = x => x % 2 === 0;
const waitThenEven = x =>
  waitThen(200, even, x);

async function filter(a, f) {
  return a.reduce(async (acc, x) => {
    const prev = await acc;
    return (await f(x))
      ? prev.concat(x)
      : prev;
  }, []);
}

const results = filter(data, waitThenEven);
results.then(console.log);
