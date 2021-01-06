const selectState = document.querySelector('#select-state');
const btGenerate = document.querySelector('#bt-generate');
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

function generateCurriculum() {
  const inputs = document.querySelectorAll('input, select, textarea');
  const div = document.createElement('div');
  btGenerate.addEventListener('click', function () {
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].type === 'radio' && !inputs[index].checked) {
        continue;
      }
      if (inputs[index].value !== '') {
        let userInput = inputs[index].value;
        let formName = inputs[index].name;
        div.innerHTML += `<p>${formName}: ${userInput}</p>`;
        div.classList.add('curriculo');
        document.body.appendChild(div);
      }
    }
  });
}
generateCurriculum();

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

const validate = new window.JustValidate('.js-form', {
  rules: {
    textarea: {
      required: true,
      maxLength: 1000
    },
    cpf: {
      required: true,
      minLength: 11,
      maxLength: 11
    },
    name: {
      required: true,
      maxLength: 40
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    radio: {
      required: true,
    },
    // state: {
    //   required: true,
    // },
    // date: {
    //   required: true,
    // },
  },
});