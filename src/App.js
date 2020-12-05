import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import HotelList from './components/HotelList';
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Home />
        <HotelList />
        <About />
      </main>
    )
  }
}


export default App;
