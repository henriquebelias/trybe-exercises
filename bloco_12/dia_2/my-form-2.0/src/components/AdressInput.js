import React from 'react';

class AdressInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';
    if(value.length > 200) error = 'O texto não pode ser maior que 200 caracteres';
    return (
      <div>
        <label>
          Endereço:
          <input
            type="text"
            name="adressInput"
            onChange={handleChange}
            value={value.replace(/[^\w\s]/gi, '')}
            autoComplete="off" />
        </label>
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

// Remover qualquer caracter especial que seja digitado ???

export default AdressInput;
