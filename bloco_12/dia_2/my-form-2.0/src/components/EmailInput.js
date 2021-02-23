import React from 'react';

class EmailInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';
    if(!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && value.length > 0) error = 'Email inválido'
    if(value.length > 50) error = 'O texto não pode ser maior que 50 caracteres';
    return(
      <div>
        <label>
          Email:
          <input type="text" name="emailInput" onChange={handleChange} value={value} autoComplete="off" />
        </label>
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

//

export default EmailInput;