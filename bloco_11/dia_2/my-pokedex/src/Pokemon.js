import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <div>
        <p>Name: {name} </p>
        <p>Type: {type} </p>
        <p>Weigth: {value} {measurementUnit}</p>
        <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string
  })
}

export default Pokemon;
