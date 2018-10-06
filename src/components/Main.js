import React, { Component } from 'react';
import '../styles/App.css';
import ListLogs from './ListLogs';
import Form from './Form';
import ConsultInventory from './ConsultInventory';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="content-screen main">

          <img className='App-logo' src={require('../assets/bacalao-logo.svg')} alt="" />
          <h1>BACALAO</h1>
          <h2>Merchandise Inventory Management Tool</h2>
        </div>
      </div>
    );
  }
}

export default App;