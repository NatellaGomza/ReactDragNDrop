import React from 'react';
import PropTypes from 'prop-types';

import BuildHousesList from './BuildHousesList';

import './AllHouses.css';

class ListOfBuildAllHouses extends React.PureComponent {

  static propTypes = {
    header: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        build: PropTypes.string.isRequired
      })
    ),
  };

  render() {

    let buildHouses = this.props.list.map(el => {
      if (el.build === "true") {
        return <BuildHousesList key={el.id} name={el.name} isBuild={el.build} />
      }
    });

    return (
      <div>
        <div className="secondHeader"> Список готовых домов: </div>
        <div className='list'>
          {buildHouses}
        </div>
      </div>
    );
  }
}

export default ListOfBuildAllHouses;
