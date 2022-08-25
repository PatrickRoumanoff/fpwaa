const data = [1, 2, 3, 4];
const odd = (x) => x % 2 === 0;

const result = data.filter(odd);
console.log(result);
// => [2, 4]
