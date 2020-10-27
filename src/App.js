import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import HotelList from './components/HotelList';
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Home />
        <HotelList />
      </main>
    )
  }
}


export default App;
