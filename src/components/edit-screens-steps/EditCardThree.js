// src/js/components/Form.js
import React, { Component } from "react";
import '../../styles/Form.css';

class EditCardThree extends Component {

    render() {

        return (
            <div className="card-three">
                <h3>Sizes and quantities</h3>
                
                <fieldset action="" className="products-sizes">
                
                {this.props.inventory.filter( inventoryProduct => this.props.selectedProducts.includes(inventoryProduct.id) ).map( product => (
                    <div key={product.id} className="product-accordion">
                        <div className={`accordion-preview img${product.id}`}>
                            <h4>{product.name}</h4>
                            <p>{product.type}</p>
                        </div>
                        <div className="accordion-sizes">
                            {Object.keys(product.quantities).map( size => (
                                <label key={size}>
                                    {size}:
                                     <input
                                        name={`${product.id}-${size}`}
                                        type="number"
                                        min="0"
                                        value={this.props[`${product.id}${size}`]}
                                        onChange={this.props.handleInputChange} />
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                </fieldset>
            </div>
        );
    }
}

export default EditCardThree;
