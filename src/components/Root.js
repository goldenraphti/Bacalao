import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css';
import Main from './Main'
import EditScreen from './EditScreen'
import InventoryScreen from './InventoryScreen'
import LogsScreen from './LogsScreen'
import store from "../store";

const App = () => (
  <Provider store={store} >
    <Router>
        <div>
            <Route exact  path="/" render={() => (
                <Main />
            )} />

            <Route path="/edit" render={() => (
                <EditScreen />
            )} />
            
            <Route path="/inventory" render={() => (
                <InventoryScreen />
            )} />
            
            <Route path="/logs" render={() => (
                <LogsScreen />
            )} />
        </div>
    </Router>
  </Provider>
)

export default App;
