function positive (a) {
  if (a > 0) {
    return('positive');
  } else if (a < 0) {
    return('negative');
  } else {
    return('zero');
  }
}

console.log(positive(-1));
console.log(positive(0));
console.log(positive(1));
