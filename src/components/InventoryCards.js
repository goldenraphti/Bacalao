import React, { Component } from 'react';


class InventoryCards extends Component {
  componentDidMount() {
    console.log('inside InventoryCards', this.props);
    // this.filterItemsToDisplay();
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


  // soon to be implemented
/*   // filter the inventory by itemsType and then sort it out with sortBy value
  filterItemsToDisplay() {
    // filter the inventory array with item-type
    let arrayCards = this.props.inventory.filter( item => item.type === this.props.itemType || this.props.itemType === 'all');
    // sorts out the array by sortBy
    function compare(a, b) {
        console.log('a,b',a,b)
        let genreA = Object.values(a.quantities).map( sizeQuantity => genreA = genreA + sizeQuantity);
        let genreB = Object.values(b.quantities).map( sizeQuantity => genreB = genreB + sizeQuantity);
        // console.log(genreA, genreB);
      
        let comparison = 0;
        if (genreA > genreB) {
          comparison = 1;
        } else if (genreA < genreB) {
          comparison = -1;
        }
        return comparison;
      }
      
      arrayCards.sort(compare);


    console.log( 'inside filterItemsToDisplay', arrayCards.sort(compare));
  } */

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
                        <div class="styled">
                            <select id="itemType" value={this.props.itemType} onChange={this.props.handleChange}>
                                <option key="all" value="all">All</option>
                                {this.filterItemTypes(this.props.inventory).map( (type => (
                                    <option key={type} value={type}>{type}</option>
                                )))}
                            </select>
                        </div>
                    </label>
                    {/* soon to be implemented */}
{/*                      <label className="filter-sortby inventory-filter">
                        Sort by:
                        <select id="sortBy" value={this.props.sortBy} onChange={this.props.handleChange}>
                            <option value="newest">Newest</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="lowest">lowest supplies</option>
                            <option value="highest">highest supplies</option>
                        </select>
                    </label> */}
                </form>
            </div>
            <div className="inventory-cards">
                {this.props.inventory.filter( item => item.type === this.props.itemType || this.props.itemType === 'all').map( item => (
                    <div className="card-product card-shadow">
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