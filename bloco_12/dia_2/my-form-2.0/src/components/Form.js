import React from 'react';
import NameInput from './NameInput';
import './Form.css';
import EmailInput from './EmailInput';

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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
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
          </fieldset>
        </form>
        <h5>{`Nome: ${this.state.nameInput}`}</h5>
        <h5>{`Email: ${this.state.emailInput}`}</h5>
      </div>
    )
  }
}

export default Form;
