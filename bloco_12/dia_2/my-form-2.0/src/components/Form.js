import React from 'react';
import NameInput from './NameInput';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: '',
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
        <fieldset>
          <legend>Dados Pessoais</legend>
          <NameInput handleChange={this.handleChange} value={this.state.nameInput} />
        </fieldset>
      </div>
    )
  }
}

export default Form;
