import React from 'react';

class JobDescriptionInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';
    if(value.length > 500) error = 'O texto não pode ser maior que 500 caracteres';
    return (
      <div>
        <label>
          Descrição do Cargo:
          <textarea name="jobDescriptionInput" onChange={handleChange} value={value} autoComplete="off" />
        </label>
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default JobDescriptionInput;
