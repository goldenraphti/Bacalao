import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css';
import Main from './Main'
import Edit from './Edit'
import Check from './Check'
import Consult from './Consult'
import store from "../store";

const App = () => (
  <Provider store={store} >
    <Router>
        <div>
            <Route exact  path="/" render={() => (
                <Main />
            )} />

            <Route path="/edit" render={() => (
                <Edit />
            )} />
            
            <Route path="/check" render={() => (
                <Check />
            )} />
            
            <Route path="/consult" render={() => (
                <Consult />
            )} />
        </div>
    </Router>
  </Provider>
)

export default App;
