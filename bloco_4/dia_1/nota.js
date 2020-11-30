function grade(nota) {
  if (nota > 100) {
    return('invalid number');
  } else if (nota >= 90) {
    return('A');
  } else if (nota >= 80) {
    return('B');
  } else if (nota >= 70) {
    return('C');
  } else if (nota >= 60) {
    return('D');
  } else if (nota >= 50) {
    return('E');
  } else if (nota < 50 && nota > 0) {
    return('F');
  } else {
    return('invalid number');
  }
}

console.log(grade(-1));
console.log(grade(0));
console.log(grade(40));
console.log(grade(50));
console.log(grade(60));
console.log(grade(70));
console.log(grade(80));
console.log(grade(90));
console.log(grade(100));
console.log(grade(110));
