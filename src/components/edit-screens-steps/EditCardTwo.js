// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';


class EditCardTwo extends Component {


    componentDidMount() {
    }

    render() {
        
        return (
            <div className={this.props.screen === 2 ? "card-two" : "hidden" }>
                <h3>Select products</h3>
                
                <fieldset className="checkboxes-productsSelected">
                       {this.props.inventory.filter(product => this.props.itemsType.includes(product.type)).map(product => (
                            <label
                            key={product.id}
                            tabIndex="0"
                            className={this.props.selectedProducts.includes(product.id) ? `checkbox-button checkbox-photo img${product.id} checked` : `checkbox-button checkbox-photo img${product.id}`}>
                                <p>{product.type}-{product.name}</p>
                                <input
                                    name={product.id}
                                    type="checkbox"
                                    checked={this.props.selectedProducts.includes(product.id)}
                                    onChange={this.props.handleInputChange} />
                            </label>
                        ))}
                    </fieldset>
            </div>
        );
    }
}


export default EditCardTwo;