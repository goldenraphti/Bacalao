import React, { Component } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    
    componentDidMount() {
        this.underlineCurrentPage()
    }
    
    // function to identify all the navbar links, then iterate through them to check which one is the one of the current page (innerText === this.props.currentPage) and the adds to it a className to keep it always underlines, or different color, or whatever
    underlineCurrentPage = () => {
        
        let listLinks = document.getElementsByClassName('nav-a-link');

        
        for( let link of listLinks) {
                    
            let textLink = link.textContent.toLowerCase();
            textLink == this.props.currentPage ? link.classList.add('currentNav') : null;
        }
        
    }
    
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
                                <img className='' src={require('../assets/edit.svg')} alt="" />
                                Edit
                                </Link>
                            </div>
                           </li>
                           <li>
                               <div className="nav-link">
                                <Link className="nav-a-link" to="/inventory">
                                <img className='' src={require('../assets/boxes.svg')} alt="" />
                                Consult
                                </Link>
                            </div>
                           </li>
                           <li>
                               <div className="nav-link">
                                <Link className="nav-a-link" to="/logs">
                                <img className='' src={require('../assets/clock.svg')} alt="" />
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