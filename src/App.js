import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'

import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Footer from './components/Footer/Footer'

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
