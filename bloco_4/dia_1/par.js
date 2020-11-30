function even(a, b, c) {
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return('true');
  } else {
    return('false');
  }
}

console.log(even(1, 2, 3));
console.log(even(1, 3, 5));