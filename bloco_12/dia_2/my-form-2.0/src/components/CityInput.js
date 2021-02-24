import React from 'react';

class CityInput extends React.Component {
  render() {
    const { handleBlur, handleChange, value } = this.props;

    let error = '';
    if(value.length > 28) error = 'O texto não pode ser maior que 28 caracteres';
    return (
      <div className="mb-3">
        <label className="form-label">Cidade:</label>
        <input className="form-control"type="text" name="cityInput" onBlur={handleBlur} onChange={handleChange} value={value} autoComplete="off" />
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default CityInput;
