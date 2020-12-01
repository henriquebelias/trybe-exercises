  function triangle(a, b, c) {
  if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number') {
    return('Valor inválido');
  } else if (a + b + c == 180) {
    return('true');
  } else if (a + b + c != 180) {
    return('false');
  } 
}

console.log(triangle(60, 60, 60));
console.log(triangle(60, 60, 50));
console.log(triangle('a', 'b', 'c'));
