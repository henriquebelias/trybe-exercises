import React from 'react';

class NameInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';
    if(value.length > 40) error = 'O texto não pode ser maior que 40 caracteres';

    return(
      <div>
        <label>
          Nome:
          <input type="text" name={"nameInput"} onChange={handleChange} value={value.toUpperCase()} autoComplete="off" />
        </label>
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default NameInput;
