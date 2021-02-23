import React from 'react';

class CurriculumInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';
    if(value.length > 1000) error = 'O texto não pode ser maior que 1000 caracteres';

    return (
      <div>
        <label>
          Resumo do Currículo:
          <textarea name="curriculumInput" onChange={handleChange} value={value}  autoComplete="off" />
        </label>
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default CurriculumInput;
