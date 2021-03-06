import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import '../styles/Logs.css';
import LogsPreviewList from './logs-components/LogsPreviewList';
import LogDisplayed from './logs-components/LogDisplayed';

const mapStateToProps = (state) => {
  console.log('state.logs', state.logs);
  return { 
    logs: state.logs,
    inventory: state.inventory,
   };
};

class ConnectedLogsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logDisplayed: null,
      windowWidth: undefined,
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  /* handleResize to update layout depending if mobile or desktop,
  so hide or display LogsPreviewList when LogDisplyed is displayed */
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
    console.log(this.state);
  }

  // takes the id of the log preview clicked, pass it to state to display it big
  handleClick(log) {
    console.log('log', log);
    this.setState({ logDisplayed: log });
  }

  // sums up quantities total of each items to display in each card
  totalSizes(itemQuantities) {
    // console.log('start totalSizes', itemQuantities);
    let total = 0;
    Object.values(itemQuantities).map( sizeQuantity => total = total + sizeQuantity);
    return total;
  }

  totalQuantityLog(log) {
    console.log('starts totalQuantityLog', log);
    let total = 0;
    Object.keys(log.productsSold).map(item => total = total + this.totalSizes(log.productsSold[item].quantities));
    // Object.keys(log.productsSold).map(item => console.log(item, log.productsSold[item].quantities));
    return total;
  }

  fetchInfoFromInventory(item, info) {
    console.log('fetchInfoFromInventory', item, info, this.props.inventory );
    const inventoryFiltered = this.props.inventory.filter( inventoryItem => inventoryItem.id == item);
    const itemFiltered = {...inventoryFiltered[0]};
    return itemFiltered[info];
  }

  render() {
    return (

      <div className="App log-screen">
        <div className="content-screen log-screen-content">
          { this.state.windowWidth < 900 && this.state.logDisplayed !== null ? null : <LogsPreviewList
            {...this.props}
            logDisplayed={this.state.logDisplayed}
            handleClick={this.handleClick.bind(this)}
            totalSizes={this.totalSizes}
            totalQuantityLog={this.totalQuantityLog}
          />}
          {this.state.logDisplayed !== null ? <LogDisplayed
            log={this.state.logDisplayed}
            {...this.props}
            handleClick={this.handleClick.bind(this)}
            totalSizes={this.totalSizes.bind(this)}
            totalQuantityLog={this.totalQuantityLog.bind(this)}
            fetchInfoFromInventory={this.fetchInfoFromInventory.bind(this)}
          /> : null}
        </div>
      </div>
    );
  }
}

const LogsScreen = connect(mapStateToProps)(ConnectedLogsScreen);

export default LogsScreen;
