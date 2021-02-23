import React from 'react';
import NameInput from './NameInput';
import './Form.css';
import EmailInput from './EmailInput';
import CpfInput from './CpfInput';
import AdressInput from './AdressInput';
import CityInput from './CityInput';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: '',
      emailInput: '',
      cpfInput: '',
      adressInput: '',
      cityInput: '',
      stateInput: '',
      housingInput: '',
      curriculumInput: '',
      positionInput: '',
      jobDescriptionInput: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleBlur({ target }) {
    let { value } = target;
    const isNumber = parseInt(value[0]);
    if(!Number.isNaN(isNumber)) {
      this.setState({
        cityInput: '',
      })
    }
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <NameInput handleChange={this.handleChange} value={this.state.nameInput} />
            <EmailInput handleChange={this.handleChange} value={this.state.emailInput} />
            <CpfInput handleChange={this.handleChange} value={this.state.cpfInput} />
            <AdressInput handleChange={this.handleChange} value={this.state.adressInput} />
            <CityInput handleChange={this.handleChange} value={this.state.cityInput} handleBlur={this.handleBlur} />
          </fieldset>
        </form>
        <h5>{`Nome: ${this.state.nameInput}`}</h5>
        <h5>{`Email: ${this.state.emailInput}`}</h5>
        <h5>{`CPF: ${this.state.cpfInput}`}</h5>
        <h5>{`Endereço: ${this.state.adressInput}`}</h5>
        <h5>{`Cidade: ${this.state.cityInput}`}</h5>
      </div>
    )
  }
}

export default Form;
