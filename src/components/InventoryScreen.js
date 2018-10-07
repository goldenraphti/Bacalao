import React, { Component } from 'react';
import '../styles/App.css';
import ConsultInventory from './ConsultInventory';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="content-screen">
          <img className='App-logo-name' src={require('../assets/bacalao-logo-with-name.svg')} alt="" />
          <ConsultInventory />
        </div>
      </div>
    );
  }
}

export default App;