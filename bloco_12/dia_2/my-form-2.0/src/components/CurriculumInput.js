import React from 'react';

class CurriculumInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';
    if(value.length > 1000) error = 'O texto não pode ser maior que 1000 caracteres';

    return (
      <div className="mb-3">
        <label className="form-label">Resumo do Currículo:</label>
        <textarea className="form-control" name="curriculumInput" onChange={handleChange} value={value}  autoComplete="off" />
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default CurriculumInput;
