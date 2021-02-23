import React from 'react';

class NameInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label>
        Nome:
        <input type="text" onChange={handleChange} name={'nameInput'} value={value} />
      </label>
    )
  }
}

export default NameInput;
