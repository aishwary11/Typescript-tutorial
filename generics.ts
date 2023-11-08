type Pair<T, U> = {
  first: T;
  second: U;
};

const pair: Pair<number, string> = { first: 11, second: "Aishwary" };
const pairer: Pair<boolean, string> = { first: true, second: "Aishwary" };
console.log(pair, pairer);