import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'

import Navbar from './components/Navbar/Navbar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes />
        </main>
      </BrowserRouter>
    )
  }
}


export default App;
