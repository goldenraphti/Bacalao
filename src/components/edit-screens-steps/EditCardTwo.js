// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';


class EditCardTwo extends Component {


    componentDidMount() {
        console.log(document.getElementsByClassName('toAnimate'))
        Array.from(document.getElementsByClassName('toAnimate')).map( el => {
            el.classList.add('fadeInRight')
            el.classList.add('animated')
            el.classList.add('delay-3ms')
        });
    }

    render() {
        
        return (
            <form id='edit-form' className='card-shadow card'>
                <h3>Edit</h3>


                <div className="form-inputs-container toAnimate" key="ef2">
                
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

                    <fieldset className="checkbox">
                        <input
                        type='checkbox'
                        name='isGoing'
                        value='valuable'
                        id="isGoing"
                        
                        checked={this.props.isGoing}
                        onChange={this.props.handleInputChange}/>
                        {/* <label htmlFor="isGoing"></label> */}
                        <label for="isGoing">freedom to move</label>
                        <label htmlFor="isGoing">freedom to move</label>
                    </fieldset>

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


export default EditCardTwo;