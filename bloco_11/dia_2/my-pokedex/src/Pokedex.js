import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((poke) => <Pokemon pokemon={poke} key={poke.id} />)}
      </div>
    )
  }
}

export default Pokedex;
