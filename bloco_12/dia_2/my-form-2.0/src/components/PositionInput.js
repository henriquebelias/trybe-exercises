import React from 'react';

class PositionInput extends React.Component {
  render() {
    const { handleChange, handleMouseEnter, mouseEnter, value} = this.props;

    let error = '';
    if(value.length > 40) error = 'O texto não pode ser maior que 40 caracteres';
    return (
      <div className="mb-3">
        <label className="form-label">Cargo:</label>
        <input
          className="form-control"
          type="text"
          name="positionInput"
          onChange={handleChange}
          onMouseEnter={!mouseEnter ? handleMouseEnter : () => {}}
          value={value}
          autoComplete="off"
        />
        <span className="error">{error ? error : ''}</span>
      </div>
    )
  }
}

export default PositionInput;