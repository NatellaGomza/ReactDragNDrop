import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AllHouses from '../components/AllHouses';

class InitAllHouses extends React.PureComponent {

  static propTypes = {
    initState: PropTypes.object.isRequired,
};

  render() {
    return (
      <AllHouses
        list={this.props.initState.allHouses} />
      );
  }

}

const mapStateToProps = function (state) {
  return {
      initState: state.storeOfHouses,
  };
};

const All_Houses = connect(mapStateToProps)(InitAllHouses);

export default All_Houses;