let count = 0;

const wait = ms =>
  new Promise((
    resolve //
  ) => setTimeout(resolve(), ms));

const waitLog = ms => {
  const counter = count++;
  return new Promise(resolve => {
    console.log(`start ${counter}`);
    setTimeout(() => {
      console.log(`end   ${counter}`);
      resolve(ms);
    }, ms);
  });
};

async function waitThen(ms, f, x, y) {
  await waitLog(ms);
  return f(x, y);
}

module.exports = { waitLog, wait, waitThen };
