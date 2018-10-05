// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log('state.inventory', state.inventory)
    return { inventory: state.inventory };
};

const ConnectedListInventory = ({ inventory }) => (
    <div id="inventory-div" className="card card-shadow">
        <h3>Inventory</h3>
        <div className="single-inventory-item block">
        {inventory.map(el => (
            <li className="list-group-item-inventory" key={el.id}>
                ID: {el.id}
                <br/>Name: {el.name}
                <br/>Year: {el.year}
                <br/><h4>Sizes:</h4>
                <ul className="list-size-inventory">
                    {Object.keys(el.size).map( sizeInventoryKey => (
                        <li className="item-size-log" key={`${el.id}-${sizeInventoryKey}`}>{sizeInventoryKey} : {el.size[sizeInventoryKey]}</li>
                    ))}
                </ul>
                <br/><button>See image</button>
            </li>
        ))}
        </div>
    </div>
    
);

const ConsultInventory = connect(mapStateToProps)(ConnectedListInventory);

export default ConsultInventory;