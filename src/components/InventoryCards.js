import React, { Component } from 'react';


class InventoryCards extends Component {
  componentDidMount() {
    console.log('inside InventoryCards', this.props);
  }

  filterItemTypes(inventory) {
    let types = [];
    inventory.map( item => types.includes(item.type) ? null : types.push(item.type));
    return types;
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
                {this.props.itemType} | {this.props.sortBy}
                {this.props.inventory.filter( item => item.type === this.props.itemType || this.props.itemType === 'all').map( item => (
                    <div className="card-product">
                        {/* <img src="" alt=""/> */}
                        <div className="item-details">
                            <h4>{item.name}</h4>
                            <p>{item.year}</p>
                            <div className="item-type-total">
                                <p className="details-type">{item.type}</p>
                                {/* <p className="details-total">{item}</p> */}
                            </div>
                            <div className="item-sizes">

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
}

export default InventoryCards;