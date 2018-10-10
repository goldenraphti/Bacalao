// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';

class EditCardThree extends Component {


    render() {
        
        return (
            <div className="edit-three">
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
            </div>
        );
    }
}


export default EditCardThree;