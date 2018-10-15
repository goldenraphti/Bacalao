import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css'
import Main from './Main'
import Navbar from './Navbar';
import EditScreen from './EditScreen'
import InventoryScreen from './InventoryScreen'
import LogsScreen from './LogsScreen'
import store from "../store"

const App = () => (
    <Provider store={store} >
        <Router>
            <div>
                <Route exact  path="/" render={() => (
                    <div>
                        <Main />
                        <Navbar />
                    </div>
                )} />

                <Route path="/edit" render={() => (
                    <div>
                        <EditScreen />
                        <Navbar />
                    </div>
                )} />
                
                <Route path="/inventory" render={() => (
                    <div>
                        <InventoryScreen />
                        <Navbar />
                    </div>
                )} />
                
                <Route path="/logs" render={() => (
                    <div>
                        <LogsScreen />
                        <Navbar />
                    </div>
                )} />
            </div>
        </Router>
    </Provider>
)

export default App;
