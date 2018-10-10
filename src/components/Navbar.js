import React, { Component } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    
    
    render() {
        return (

                  <nav id="navbar">
                       <ul>
                          <li>
                            <div className="nav-link">
                                <Link className="nav-a-link" to="/" >
                                    <img className='logo only-desktop' src={require('../assets/bacalao-logo.svg')} alt="" />
                                    <img className='only-mobile icon-small' src={require('../assets/home2.svg')} alt="" />
                                    <p className="only-mobile">Home</p>
                                </Link>
                            </div>
                           </li>
                           <li>
                            <div className="nav-link">
                                <Link className="nav-a-link" to="/edit">
                                <img className='' src={require('../assets/edit-3.svg')} alt="" />
                                Edit
                                </Link>
                            </div>
                           </li>
                           <li>
                               <div className="nav-link">
                                <Link className="nav-a-link" to="/inventory">
                                <img className='' src={require('../assets/inventory.svg')} alt="" />
                                Inventory
                                </Link>
                            </div>
                           </li>
                           <li>
                               <div className="nav-link">
                                <Link className="nav-a-link" to="/logs">
                                <img className='' src={require('../assets/logs.svg')} alt="" />
                                Logs
                                </Link>
                            </div>
                           </li>
                       </ul>
                   </nav>

        )
    }

}

export default Navbar;