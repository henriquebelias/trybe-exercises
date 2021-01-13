const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addMorningShift = (object, key, value) => object[key] = value;
addMorningShift(lesson2, 'turno', 'manhã');
console.log('Exercício 1')
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => Object.keys(object);
console.log('Exercício 2');
console.log(listKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

const objectSize = object => Object.keys(object).length;
console.log('Exercício 3');
console.log(`Tamanho do objeto: ${objectSize(lesson1)} items`);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = object => Object.values(object);
console.log('Exercício 4');
console.log(listValues(lesson1));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3. 
const allLessons = {lesson1, lesson2, lesson3};
console.log('Exercício 5');
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas
const studentsTotal = (object) => {
  let sum = 0;
  const numberKeys = Object.keys(object);
  for (let index in numberKeys) {
    sum += object[numberKeys[index]].numeroEstudantes;
  }
  return sum;
};
console.log('Exercício 6');
console.log(studentsTotal(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo
const getValueByNumber = (object, number) => Object.values(object)[number];
console.log('Exercício 7');
console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (object, key, value) => {
  const entries = Object.entries(object);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
};
console.log('Exercício 8');
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

//Bônus
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const mathStudents = object => {
  let sum = 0;
  const values = Object.values(object);
  for (let index in values) {
    if(values[index].materia.includes('Matemática')) {
      sum += values[index].numeroEstudantes;
    }
  }
  return sum;
}
console.log('Bônus 1');
console.log(mathStudents(allLessons));
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (object, teacher) => {
  let relatorio = {'professor': '', 'aulas': [], 'estudantes': 0};
  const lessonsArray = Object.values(allLessons);
  for (let index in lessonsArray) {
    let teacherName = lessonsArray[index].professor;
    let classes = lessonsArray[index].materia;
    let students = parseInt(lessonsArray[index].numeroEstudantes);
    if(teacherName === teacher) {
      relatorio.professor = teacherName;
      relatorio.aulas.push(classes);
      relatorio.estudantes += students;
    }
  }
  return relatorio;
}
console.log('Bônus 2');
console.log(createReport(allLessons, 'Maria Clara'));
