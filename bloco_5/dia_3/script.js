function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercício 1
function createDays() {
  const days = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  for (let index in dezDaysList) {
    let day = document.createElement('li');
    day.classList.add('day');
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      day.classList.add('holiday');
    }
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 ||dezDaysList[index] === 25) {
      day.classList.add('friday');
    }
    day.innerText = dezDaysList[index];
    days.appendChild(day);
  }

}
createDays();

//Exercício 2
function btFeriados(name){
  const bt = document.createElement('button');
  bt.innerText = name;
  bt.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(bt);
}
btFeriados('Feriados');

//Exercício 3
const button = document.querySelector('#btn-holiday');
const holiday = document.getElementsByClassName('holiday');
function btFeriadosClick() {
  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor != 'white') {
      holiday[index].style.backgroundColor = 'white';
    }else {
      holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  } 
}
button.addEventListener('click', btFeriadosClick);

//Exercício 4
function btFriday(name) {
  const bt = document.createElement('button');
  bt.innerText = name;
  bt.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(bt);
}
btFriday('Sexta-feira');

//Exercício 5
const buttonFriday = document.querySelector('#btn-friday');
const friDay = document.getElementsByClassName('friday');
const days = [4, 11, 18, 25];
function changeFriday () {
  for (let index = 0; index < friDay.length; index += 1) {
    if (friDay[index].innerHTML !== 'SEXTOU!') {
      friDay[index].innerHTML = 'SEXTOU!'
    } else {
      for (let index = 0; index < friDay.length; index += 1) {
        friDay[index].innerText = days[index];
      }
    }
  }
}
buttonFriday.addEventListener('click', changeFriday);