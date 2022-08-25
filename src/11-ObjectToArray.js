const data = {
  a: { value: "a" },
  b: { value: "b" },
  c: { value: "c" },
};

Object.entries(data).map(([key, value]) =>
  console.log(key, value)
);
Object.keys(data).map((key) => console.log(key));
Object.values(data).map((value) => console.log(value));
