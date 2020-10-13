import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import HotelList from './components/HotelList';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <HotelList />
      </main>
    )
  }
}

export default App;
