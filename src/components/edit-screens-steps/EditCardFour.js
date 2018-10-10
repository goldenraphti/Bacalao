// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';

class EditCardFour extends Component {

    render() {
        
        return (
            <div className="edit-four">
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
            </div>
        );
    }
}

export default EditCardFour;