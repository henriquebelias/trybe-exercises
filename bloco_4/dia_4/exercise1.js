let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// console.log(`Bem vinda, ${info.personagem}`);

info.recorrente = 'Sim';

// console.log(info);

// for (key in info) {
//   console.log(key);
// }

// for (key in info) {
//   console.log(info[key]);
// }

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (key in info) {
  if (info[key] === info.recorrente && info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(`${info[key]} e ${info2[key]} `);
  }
}