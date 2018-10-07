// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';

class EditCardFour extends Component {

    render() {
        
        return (
            <form onSubmit={this.props.handleSubmit} id='edit-form' className='card-shadow card'>
                <h3>Edit</h3>
                <div className="form-inputs-container">
                
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

export default EditCardFour;