let salarioBruto = 3000;

//INSS
let aliquotaMaxima = 570.88; // salário bruto > 5189.82
let aliquota11 = salarioBruto * 0.11; // 2594.93 <= salário bruto <= 5189.82
let aliquota9 = salarioBruto * 0.09; // 1556.95 <= salário bruto <= 2594.92
let aliquota8 = salarioBruto * 0.08; // salário bruto <= 1556.94
let salarioBase;

if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - aliquotaMaxima;
} else if (salarioBruto <= 5189.82 && salarioBruto >= 2594.93) {
  salarioBase = salarioBruto - aliquota11;
} else if (salarioBruto <= 2594.92 && salarioBruto >= 1556.95) {
  salarioBase = salarioBruto - aliquota9;
} else {
  salarioBase = salarioBruto - aliquota8;
}

//IR
let aliquota27 = (salarioBase * 0.275) - 869.36; // salario base > 4664.68
let aliquota22 = (salarioBase * 0.225) - 636.13;// 3751.06 <= salario base <= 4664.68
let aliquota15 = (salarioBase * 0.15) - 354.8;// 2826.66 <= salario base <= 3751.05
let aliquota7 = (salarioBase * 0.075) -142.8; // 1903.99 <= salario base <= 2826.65
let salarioLiquido;

if (salarioBase > 4664.68) {
  salarioLiquido = salarioBase - aliquota27;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - aliquota22;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.06) {
  salarioLiquido = salarioBase - aliquota15;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - aliquota7;
} else {
  salarioLiquido = salarioBase;
}

console.log(salarioLiquido);