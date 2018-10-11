// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';

class EditCardFour extends Component {

    render() {
        
        return (
            <div className="card-four">
                <h3>Name and comments</h3>

                <div className="card-four-inputs">
                
                    <label>
                        <p>Name:</p>
                        <input type="text" id="user" value={this.props.value} onChange={this.props.handleChange} />
                    </label>

                    <label>
                        <p>Concert:</p>
                        <input type="text" id="concert" value={this.props.value} onChange={this.props.handleChange} />
                    </label>

                    <label>
                        <p>Comments:</p>
                        <textarea type="textarea" id="comments" value={this.props.value} onChange={this.props.handleChange} placeholder="e.g.: Concert Ibey - entrance door" />
                    </label>

                </div>
            </div>
        );
    }
}

export default EditCardFour;