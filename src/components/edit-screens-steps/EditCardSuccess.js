// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';

class EditCardSuccess extends Component {

    render() {
        
        return (
            <div className={this.props.screen === "success" ? "card-success" : "hidden"} >
                <h3>Report successfully submitted !</h3>
            </div>
        );
    }
}

export default EditCardSuccess;