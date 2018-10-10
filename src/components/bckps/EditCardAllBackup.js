// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import {  addItems, removeItems, logChange } from "../../actions/actionCreators";
import '../../styles/Form.css';
import store from "../../store";

class EditCardOne extends Component {


    render() {
        
        return (
            <form onSubmit={this.props.handleSubmit} id='edit-form' className='card-shadow card'>
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


                    <label htmlFor="item">Select the item:
                        <select id="item" onChange={this.props.handleChange} value={this.props.item}>
                            <option disabled value='undefined'> -- select an item -- </option>
                        {/* create those options dynamically, depending of the year chosen */}
                            <optgroup label="T-Shirts">
                                <option value='FTE'>Freedom to Express</option>
                                <option value='FTR'>Freedom to Resist</option>
                                <option value='FTM'>Freedom to Move</option>
                                <option value='FFS'>Freedom for Sale</option>
                            </optgroup>
                            <optgroup label="Tot bags">
                                <option value='FTR'>Freedom to Resist</option>
                                <option value='FTM'>Freedom to Move</option>
                                <option value='FFS'>Freedom for Sale</option>
                            </optgroup>
                        </select>
                    </label>

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

                    <label>
                        Comments:
                        <textarea type="text" id="comments" value={this.props.value} onChange={this.props.handleChange} placeholder="e.g.: Concert Ibey - entrance door" />
                    </label>

                    <label>
                        Name:
                        <input type="text" id="user" value={this.props.value} onChange={this.props.handleChange} />
                    </label>
                </div>
                <div className="buttons-bottom-section">
                    {/* When submitting make sure every input is filled, and hopefully make sure that the same user did not send a change for the same item && size */}
                    <button type="submit" className="btn btn-success btn-lg" placeholder="Name">
                        submit
                    </button>
                </div>
            </form>
        );
    }
}


export default EditCardOne;