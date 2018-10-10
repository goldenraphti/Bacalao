import React, { Component } from 'react';


class InventoryCards extends Component {
  componentDidMount() {
    console.log('inside InventoryCards', this.props);
  }

  /* searches in whole inventory objects all possible types of item, 
  and displays those item-types as options in select menu */ 
  filterItemTypes(inventory) {
    let types = [];
    inventory.map( item => types.includes(item.type) ? null : types.push(item.type));
    return types;
  }

  // sums up quantities total of each items to display in each card
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
                        <div className="styled">
                            <select id="itemType" value={this.props.itemType} onChange={this.props.handleChange}>
                                <option key="all" value="all">All</option>
                                {this.filterItemTypes(this.props.inventory).map( (type => (
                                    <option key={type} value={type}>{type}</option>
                                )))}
                            </select>
                        </div>
                    </label>
                </form>
            </div>
            <div className="inventory-cards">
                {this.props.inventory.filter( item => item.type === this.props.itemType || this.props.itemType === 'all').map( item => (
                    <div key={item.id} className="card-product card-shadow">
                        <img src={require(`../assets/${item.image}`)} className="item-image" alt=""/>
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