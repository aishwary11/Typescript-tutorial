const add = (a: number | string, b: number | string) => {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return a.concat(b);
  throw new Error('Parameters must be numbers or strings');
};
add(2, 3);