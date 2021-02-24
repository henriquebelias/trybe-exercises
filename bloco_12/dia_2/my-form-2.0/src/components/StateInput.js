import React from 'react';

class StateInput extends React.Component {
  render() {
    const { handleChange, states, value} = this.props;
    return (
      <div className="mb-3">
        <select className="form-select" name="stateInput" onChange={handleChange} value={value}>
          <option value="Selecione um Estado" disabled>Selecione um Estado</option>
          {states.map(({sigla, nome}) => {
            return <option value={sigla} key={sigla}>{nome}</option>
          })}
        </select>
      </div>
    )
  }
}

export default StateInput;
