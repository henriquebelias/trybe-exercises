function biggest (a, b, c) {
  if (a > b && a > c) {
    return(a + ' é maior.')
  } else if (b > a && b > c) {
    return(b + ' é maior.')
  } else if (c > a && c > b) {
    return(c + ' é maior.')
  } else {
    return('São iguais.')
  }
}

console.log(biggest(5, 2, 3));