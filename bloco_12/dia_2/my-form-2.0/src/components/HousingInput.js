import React from 'react';

class HousingInput extends React.Component {
  render() {
    const { handleChange, value} = this.props;

    return (
      <div>
        <p>Tipo de Moradia</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="housingInput"
            id="house"
            onChange={handleChange}
            value="Casa"
            checked={value === 'Casa'}
          />
          <label className="form-check-label" htmlFor="house">Casa</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="housingInput"
            id="apartment"
            onChange={handleChange}
            value="Apartamento"
            checked={value === 'Apartamento'} />
          <label className="form-check-label" htmlFor="apartment">Apartamento</label>
        </div>
      </div>
    )
  }
}

export default HousingInput;
