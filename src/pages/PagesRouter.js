import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllHouses from './PageAllHouses';
import BuildHouses from './PageBuildHouses';

class PagesRouter extends React.Component {

  render() {

    return (
        <Routes>
          <Route path="/" element={<AllHouses />} />
          <Route path="/ready" element={<BuildHouses/>} />
        </Routes>
    );
  }
}

export default PagesRouter;
