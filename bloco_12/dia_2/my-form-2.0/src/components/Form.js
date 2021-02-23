import React from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import CpfInput from './CpfInput';
import AdressInput from './AdressInput';
import CityInput from './CityInput';
import StateInput from './StateInput';
import HousingInput from './HousingInput';
import CurriculumInput from './CurriculumInput';
import PositionInput from './PositionInput';
import states from './statesData';
import './Form.css';

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
      mouseEnter: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
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

  handleMouseEnter() {
    alert('Preencha com cuidado esta informação.');
    this.setState({
      mouseEnter: true,
    })
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
            <StateInput states={states} handleChange={this.handleChange} value={this.state.stateInput} />
            <HousingInput handleChange={this.handleChange} value={this.state.housingInput} />
          </fieldset>
          <fieldset>
            <legend>Dados Profissionais</legend>
            <CurriculumInput handleChange={this.handleChange} value={this.state.curriculumInput} />
            <PositionInput
              handleChange={this.handleChange}
              handleMouseEnter={this.handleMouseEnter}
              value={this.state.positionInput}
              mouseEnter={this.state.mouseEnter}
            />
          </fieldset>
        </form>
        <h5>{`Nome: ${this.state.nameInput}`}</h5>
        <h5>{`Email: ${this.state.emailInput}`}</h5>
        <h5>{`CPF: ${this.state.cpfInput}`}</h5>
        <h5>{`Endereço: ${this.state.adressInput}`}</h5>
        <h5>{`Cidade: ${this.state.cityInput}`}</h5>
        <h5>{`Estado: ${this.state.stateInput}`}</h5>
        <h5>{`Tipo de Moradia: ${this.state.housingInput}`}</h5>
        <h5>{`Resumo do Currículo: ${this.state.curriculumInput}`}</h5>
        <h5>{`Cargo: ${this.state.positionInput}`}</h5>
      </div>
    )
  }
}

export default Form;
