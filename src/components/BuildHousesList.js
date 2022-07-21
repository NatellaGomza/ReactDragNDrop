import React from 'react';
import PropTypes from 'prop-types';

import './AllHouses.css'

class BuildHouses extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };

  render() {
    return (
      <div className='housesList'>{this.props.name}</div>
    );
  }

}

export default BuildHouses;
