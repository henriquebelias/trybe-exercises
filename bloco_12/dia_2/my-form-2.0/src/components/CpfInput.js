import React from 'react';

class CpfInput extends React.Component {
  render() {
    const { handleChange, value} = this.props;

    let error = '';
    if(value.length > 11) error = 'O texto não pode ser maior que 11 caracteres';

    return (
      <div>
        <label>
          CPF:
          <input type="text" name="cpfInput" onChange={handleChange} value={value} autoComplete="off" />
        </label>
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default CpfInput;
