import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListOfBuildHouses from '../components/ListOfBuildHouses';

class InitBuildHouses extends React.PureComponent {

    static propTypes = {
      initState: PropTypes.object.isRequired,
  };
  
    render() {
      
      return (
        <ListOfBuildHouses
          list={this.props.initState.allHouses} header = {this.props.initState.header}
        />
        );
    }  
  }
  
  const mapStateToProps = function (state) {
    return {
        initState: state.storeOfHouses,
    };
  };
  
  const Build_Houses = connect(mapStateToProps)(InitBuildHouses);

export default Build_Houses;
