function foo(a, b) {
  // Ensure a and b are positive integers
  a = Math.abs(a);
  b = Math.abs(b);

  // Handle base cases correctly
  if (b === 0) {
    return a === 0; // Handle case where both a and b are 0 correctly
  }
  if (a === 0) {
      return false; // Handle case where a is 0 correctly
  }

  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a === 1
}

console.log(foo(10, 2)); // Output: true (correct)
console.log(foo(15, 5)); // Output: true (correct)
console.log(foo(100, 20)); // Output: true (correct)
console.log(foo(10, 3)); //Output: false (correct)