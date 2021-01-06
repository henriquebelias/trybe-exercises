const selectState = document.querySelector('#select-state');
const btSubmit = document.querySelector('#bt-submit');
const stateList = {'Acre': 'AC', 'Alagoas': 'AL', 'Amapá': 'AP', 'Amazonas': 'AM', 'Bahia': 'BA', 'Ceará': 'CE', 'Distrito Federal': 'DF', 'Espírito Santo': 'ES', 'Goiás': 'GO', 'Maranhão': 'MA', 'Mato Grosso': 'MT', 'Mato Grosso do Sul': 'MS', 'Minas Gerais': 'MG', 'Pará': 'PA', 'Paraíba': 'PB', 'Paraná': 'PR', 'Pernambuco': 'PE', 'Piauí': 'PI', 'Rio de Janeiro': 'RJ', 'Rio Grande do Norte': 'RN', 'Rio Grande do Sul': 'RS', 'Rondônia': 'RO', 'Roraima': 'RR', 'Santa Catarina': 'SC', 'São Paulo': 'SP', 'Sergipe': 'SE', 'Tocantins': 'TO'};
const stateName = Object.keys(stateList);
const stateAbb = Object.values(stateList);
const btReset = document.querySelector('#bt-reset');

function generateStates() {
  for (let index = 0; index < stateName.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = stateName[index];
    option.value = stateAbb[index];
    selectState.appendChild(option);
  }
}
generateStates();

function checkDate() {
  const date = document.querySelector('#input-date');
  const dateArray = date.value.split('/');
  const day = dateArray[0];
  const month = dateArray[1];
  const year = dateArray[2];
  if (!(day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0)) {
    date.className = 'error';
    return 'Erro na formatação da data';
  }
  return '';
}

function checkErrors() {
  btSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    let dateError;
    let errors = '';
    dateError = checkDate()
    if (dateError !== '') {
      errors += `${dateError}\n`;
    }
    let inputsText = document.querySelectorAll('input[type=text], textarea');
    for (let index = 0; index < inputsText.length; index += 1) {
      let inputs = inputsText[index];
      if (inputs.required) {
        if (inputs.value === '') {
          inputs.className = 'error';
          errors += `O campo ${inputs.name} é obrigatório\n`
        }
        if (inputs.minLength && inputs.value.length < inputs.minLength) {
          inputs.className = 'error';
          errors += `O campo ${inputs.name} deve possuir no mínimo ${inputs.minLength} caracteres\n`
        }
      }
    }
    if (errors !== '') {
      alert(errors);
    } else {
      for (let index = 0; index < inputsText.length; index += 1) {
        inputsText[index].classList.remove('error');
      }
      generateCurriculum();
    }
  });
}
checkErrors();

function generateCurriculum() {
  const inputs = document.querySelectorAll('input, select, textarea');
  const div = document.createElement('div');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].type === 'radio' && !inputs[index].checked) {
      continue;
    }
    let userInput = inputs[index].value;
    let formName = inputs[index].name;
    div.innerHTML += `<p>${formName}: ${userInput}</p>`;
    div.classList.add('curriculo');
    document.body.appendChild(div);
  }
}

function deleteCurriculum() {
  btReset.addEventListener('click', function () {
    const curriculum = document.querySelectorAll('.curriculo');
    const form = document.querySelector('form');
    for (let index = 0; index < curriculum.length; index += 1) {
      form.reset();
      curriculum[index].remove();
    }
  });
}
deleteCurriculum();


