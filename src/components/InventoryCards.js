import React, { Component } from 'react';


class InventoryCards extends Component {
  componentDidMount() {
    console.log('inside InventoryCards', this.props);
    this.totalSizes(this.props.inventory[1].quantities)
  }

  filterItemTypes(inventory) {
    let types = [];
    inventory.map( item => types.includes(item.type) ? null : types.push(item.type));
    return types;
  }

  totalSizes(itemQuantities) {
      let total = 0;
      Object.values(itemQuantities).map( sizeQuantity => total = total + sizeQuantity);
      return total;
  }

  render() {
    return (

        <div className="inventory-content">
            <div className="inventory-header">
                <h3>Inventory</h3>
                <img className="App-logo-name" src={require('../assets/bacalao-logo-with-name.svg')} alt="" />
            </div>
            <div className="">
                <form action="" className="inventory-sorting">
                    <label className="filter-type inventory-filter">
                        Item type:
                        <select id="itemType" value={this.props.itemType} onChange={this.props.handleChange}>
                            <option key="all" value="grapefruit">All</option>
                            {this.filterItemTypes(this.props.inventory).map( (type => (
                                <option key={type} value={type}>{type}</option>
                            )))}
                        </select>
                    </label>
                    <label className="filter-sortby inventory-filter">
                        Sort by:
                        <select id="sortBy" value={this.props.sortBy} onChange={this.props.handleChange}>
                            <option value="newest">Newest</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="lowest">lowest supplies</option>
                            <option value="highest">highest supplies</option>
                        </select>
                    </label>
                </form>
            </div>
            <div className="inventory-cards">
                {this.props.inventory.filter( item => item.type === this.props.itemType || this.props.itemType === 'all').map( item => (
                    <div className="card-product card-shadow">
                        <img src={require("../assets/FTE.jpg")} className="item-image" alt=""/>
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-type">{item.type}</p>
                        <p className="item-year">{item.year}</p>
                        <p className="item-total">{this.totalSizes(item.quantities)}</p>
                        <div className="item-sizes">
                            {Object.keys(item.quantities).map( size => (
                                <p className="item-size-single" key={size}>{size}-{item.quantities[size]}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
}

export default InventoryCards;