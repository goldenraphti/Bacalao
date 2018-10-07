// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';


class EditCardOne extends Component {


    componentDidMount() {
        console.log(document.getElementsByClassName('toAnimate'))
        Array.from(document.getElementsByClassName('toAnimate')).map( el => {
            el.classList.add('fadeInRight')
            el.classList.add('animated')
            el.classList.add('delay-3ms')
        });
    }

    componentWillUnmount() {
        Array.from(document.getElementsByClassName('toAnimate')).map( el => {
            el.classList.add('fadeOut')
            el.classList.add('animated')
        });
    }

    render() {
        
        return (
            <form id='edit-form' className='card-shadow card'>
                <h3>Edit</h3>
                <div className="form-inputs-container toAnimate" key="ef1">
                    <label htmlFor="year">Item's year:
                        <select id="year" onChange={this.props.handleChange} value={this.props.year}>
                        {/* create those options dynamically, depending of the year chosen */}
                                <option value='2018'>2018</option>
                                <option value='2017'>2017</option>
                                <option value='2016'>2016</option>
                                <option value='2015'>2015</option>
                                <option value='2014'>2014</option>
                        </select>
                    </label>

                </div>
                <div className="buttons-bottom-section">
                    <a href="" className="form-cancel-link">Cancel</a>
                    {/* When submitting make sure every input is filled, and hopefully make sure that the same user did not send a change for the same item && size */}
                    <button type="button" className="" placeholder=""  onClick={() => this.props.nextScreen(this.props.cardToDisplay)} >
                        Next
                    </button>
                </div>
            </form>
        );
    }
}


export default EditCardOne;