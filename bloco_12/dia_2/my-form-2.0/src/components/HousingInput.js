import React from 'react';

class HousingInput extends React.Component {
  render() {
    const { handleChange, value} = this.props;

    return (
      <div>
        <p>Tipo de Moradia</p>
        <input
          type="radio"
          name="housingInput"
          id="house"
          onChange={handleChange}
          value="Casa"
          checked={value === 'Casa'}
        />
        <label htmlFor="house">Casa</label>
        <input
          type="radio"
          name="housingInput"
          id="apartment"
          onChange={handleChange}
          value="Apartamento"
          checked={value === 'Apartamento'} />
        <label htmlFor="apartment">Apartamento</label>
      </div>
    )
  }
}

export default HousingInput;
