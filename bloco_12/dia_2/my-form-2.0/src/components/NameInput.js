import React from 'react';

class NameInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';
    if(value.length > 40) error = 'O texto não pode ser maior que 40 caracteres';

    return(
      <div className="mb-3">
        <label className="form-label">Nome:</label>
        <input className="form-control" type="text" name={"nameInput"} onChange={handleChange} value={value.toUpperCase()} autoComplete="off" />
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default NameInput;
