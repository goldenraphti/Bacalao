import React, { Component } from 'react';
import '../styles/App.css';
import Form from './Form';
import Navbar from './Navbar';


class EditScreen extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="content-screen">
          <h1>BACALAO</h1>
          <h2>Merchandise Inventory Management Tool</h2>
          <Form />
        </div>
      </div>
    );
  }
}

export default EditScreen;