const data = [
  { name: "a", value: "b" },
  { name: "b", value: "c" },
  { name: "c", value: "d" },
];

const res1 = data.reduce(
  (acc, d) =>
    Object.assign(acc, {
      [d.name]: d.value,
    }),
  {}
);
const res2 = data.reduce(
  (acc, d) => ({
    ...acc,
    [d.name]: d.value,
  }),
  {}
);

console.log(res2);
