// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import {  addItems, removeItems, logChange } from "../../actions/actionCreators";
import '../../styles/Form.css';
import store from "../../store";

class EditCardOne extends Component {


    render() {
        
        return (
            <form id='edit-form' className='card-shadow card'>
                <h3>Edit</h3>
                <div className="form-inputs-container">
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