// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';


class EditCardOne extends Component {


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        
        return (
                <div className={this.props.screen === 1 ? "card-one" : "hidden" }>
                    <h3>Select items types</h3>
                    <fieldset className="checkboxes-itemsType">
                       <label tabIndex="0" className={this.props.itemsType.includes('shirt') ? "checkbox-button checkbox-icon shirt checked" : "checkbox-button checkbox-icon shirt"}>
                            <p>shirt</p>
                            <input
                                name="shirt"
                                type="checkbox"
                                checked={this.props.itemsType.includes('shirt')}
                                onChange={this.props.handleInputChange} />
                        </label>
                        <label tabIndex="0" className={this.props.itemsType.includes('totebag') ? "checkbox-button checkbox-icon totebag checked" : "checkbox-button checkbox-icon totebag"}>
                            <p>totebag</p>
                            <input
                                name="totebag"
                                type="checkbox"
                                checked={this.props.itemsType.includes('totebag')}
                                onChange={this.props.handleInputChange} />
                        </label>
                    </fieldset>
                </div>

        );
    }
}


export default EditCardOne;