function bigger(a, b) {
  if (a > b) {
  return(a + ' é maior.')
}else if (a < b) {
  return(b + ' é maior.')
}else {
  return('São iguais.')
}
}

console.log(bigger(5, 2));