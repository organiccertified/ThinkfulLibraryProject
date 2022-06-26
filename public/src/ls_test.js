const array = [{a: 10, b: 3}, 
  {a: 12, b: 4},
  {a: 13, b: 5}, 
  {a: 15, b: 6}, 
  {a: 16, b: 7}];

// checks whether an element is even
const even = (element) => element.a % 2 === 0;

console.log(array.some(even));
// expected output: true
