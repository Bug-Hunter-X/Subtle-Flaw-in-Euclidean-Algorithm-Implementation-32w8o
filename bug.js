function foo(a, b) {
  if (a === b) {
    return true; 
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Output: false (incorrect)
console.log(foo(15, 5)); // Output: true (correct)
console.log(foo(100, 20)); // Output: false (incorrect)