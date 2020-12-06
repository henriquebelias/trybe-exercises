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
        friDay[index].innerText = days[index];
    }
  }
}
buttonFriday.addEventListener('click', changeFriday);

//Exercício 6
const daysZoom = document.getElementById('days');
function zoomIn() {
  daysZoom.addEventListener('mouseover', function(event) {
    event.target.style.fontWeight = 'bolder';
  });
}

function zoomOut() {
  daysZoom.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = 'normal';
  });
}
zoomIn();
zoomOut();

//Exercício 7
const myTasks = document.querySelector('.my-tasks');
function createTask(taskName) {
  let taskPlace = document.createElement('span');
  taskPlace.innerText = taskName;
  myTasks.appendChild(taskPlace);
}
createTask('Terminar os exercícios');

//Exercício 8
let colorDiv = document.createElement('div');
function taskColor(color) {
  colorDiv.style.backgroundColor = color;
  colorDiv.classList.add('task');
  myTasks.appendChild(colorDiv);
}
taskColor('green');

//Exercício 9
function select() {
  colorDiv.addEventListener('click', function(event) {
    event.target.classList.toggle('selected');
  });
}
select();

//Exercício 10
function changeDayColor() {
  daysZoom.addEventListener('click', function(event) {
    if (event.target.style.color !== colorDiv.style.backgroundColor ) {
      event.target.style.color = colorDiv.style.backgroundColor;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}
changeDayColor();

//Bônus
let taskInput = document.querySelector('#task-input');
let btnAdd = document.querySelector('#btn-add');
let taskList = document.querySelector('.task-list')
function addAppointment () {
  let appointList = document.createElement('li');
  taskList.appendChild(appointList);
  btnAdd.addEventListener('click', function () {
      if (taskInput.value == '') {
        alert('Digite algum compromisso');
      } else {
        taskList.innerText = taskInput.value;
      }
  });  
  taskInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && taskInput.value.length > 0) {
      taskList.innerText = taskInput.value;
    } else {
      alert('Digite algum compromisso');
    }
  });
}
addAppointment();