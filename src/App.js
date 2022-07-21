import './App.css';

import React from 'react';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import houseStore from "./components/houseStore";

import PagesRouter from './pages/PagesRouter';

let combinedReducer = combineReducers({
  storeOfHouses: houseStore,
});
let store = createStore(combinedReducer);

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <PagesRouter />
      </Provider>
    );
  }

}

export default App;
