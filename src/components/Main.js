import React, { Component } from 'react';
import '../styles/App.css';
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

// TODO: when app start with big logo, quickly make bigger and then shrink to final SVGPathSegLinetoHorizontalAbs, and near end make the rest of text apear fadeIn

export default App;