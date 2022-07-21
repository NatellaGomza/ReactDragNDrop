import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './AllHouses.css';

class InitAllHouses extends React.PureComponent {

  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        build: PropTypes.string.isRequired
      })
    ),
  };

  item = null;

  dragStartHandler = (e, el) => {
    this.item = el;
  }

  dragOverHandler = (e) => {
    e.preventDefault();
  }

  dropHandler = (e) => {
    e.preventDefault();
    if (this.item.build !== e.currentTarget.getAttribute('databuild')) {
      this.item.build = e.currentTarget.getAttribute('databuild');
      this.props.dispatch({ type: "changeInitList", payload: this.item });
    }
  }

  render() {

    return (
      <div className='wrapper'>
        <div
          className='unbuild'
          databuild='false'
          onDragOver={(e) => this.dragOverHandler(e)}
          onDrop={(e) => this.dropHandler(e)}
        >
          {this.props.list.map(el => {
            if (el.build === "false") {
              return <div
                className='houses'
                draggable={true}
                key={el.id}
                onDragStart={(e) => this.dragStartHandler(e, el)}
              >{el.name}</div>
            }
          })}
        </div>
        <div
          className='build'
          databuild='true'
          onDragOver={(e) => this.dragOverHandler(e)}
          onDrop={(e) => this.dropHandler(e)}>
          <div className='buildHouseWrapper'>
            <NavLink to='/ready'>
              <div className='header'>Готовые дома</div>
            </NavLink>
            <div className='innerWrapper'>
            {this.props.list.map(el => {
            if (el.build === "true") {
              return <div
                className='houses'
                draggable={true}
                key={el.id}
                onDragStart={(e) => this.dragStartHandler(e, el)}
              >{el.name}</div>
            }
          })}
            </div>
          </div>
        </div>
      </div >
    )
      ;

  }

}

const mapStateToProps = function (state) {
  return {};
};

const AllHouses = connect(mapStateToProps)(InitAllHouses);

export default AllHouses;
