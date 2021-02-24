import React from 'react';

class JobDescriptionInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';
    if(value.length > 500) error = 'O texto não pode ser maior que 500 caracteres';
    return (
      <div className="mb-3">
        <label className="form-label">Descrição do Cargo:</label>
        <textarea className="form-control" name="jobDescriptionInput" onChange={handleChange} value={value} autoComplete="off" />
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default JobDescriptionInput;
