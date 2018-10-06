// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import {  addItems, removeItems, logChange } from "../../actions/actionCreators";
import '../../styles/Form.css';
import store from "../../store";

class EditCardThree extends Component {


    render() {
        
        return (
            <form id='edit-form' className='card-shadow card'>
                <h3>Edit</h3>
                <div className="form-inputs-container">
                
                <label htmlFor="size">Select size:
                    <select id="size" onChange={this.props.handleChange} value={this.props.size}>
                        <option disabled value='undefined'> -- select a size -- </option>
                    {/* create those options dynamically, depending of the year chosen */}
                        <option value='XS'>XS</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </select>
                </label>

                <label htmlFor="amount">Amount sold:
                    <input type="number" id="amount" name="amount"
                        placeholder="0" step="1" min='0' onChange={this.props.handleChange}/>
                    <span className="validity"></span>
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


export default EditCardThree;