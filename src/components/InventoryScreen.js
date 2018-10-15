import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import InventoryCards from './InventoryCards';
import '../styles/Inventory.css';


const mapStateToProps = (state) => {
  console.log('state.inventory', state.inventory);
  return { inventory: state.inventory };
};

class ConnectedInventoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: 'all',
      sortBy: 'lowest',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /* takes the id of the item previewed clicked,
  pass it to state to display it big (to be implemented in near future) */
  handleClick(item) {
    console.log('item', item);
    this.setState({ itemDisplayed: item });
  }

  render() {
    return (
      <div className="App">
        <div className="content-screen">
          <InventoryCards
            itemType={ this.state.itemType }
            sortBy={ this.state.sortBy }
            handleChange={ this.handleChange }
            {...this.props}
          />
        </div>
      </div>
    );
  }
}


const InventoryScreen = connect(mapStateToProps)(ConnectedInventoryScreen);

export default InventoryScreen;
