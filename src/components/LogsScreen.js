import React , { Component } from 'react';
import '../styles/App.css';
import '../styles/Logs.css';
import LogsPreviewList from './logs-components/LogsPreviewList';
import LogDisplayed from './logs-components/LogDisplayed';
import Navbar from './Navbar';
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log('state.logs', state.logs)
    return { logs: state.logs };
};

class ConnectedLogsScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      logDisplayed: null,
    };
  }

  componentDidMount() {
  }

  // takes the id of the log preview clicked, pass it to state to display it big
  handleClick(log) {
    console.log('log',log)
    this.setState({logDisplayed: log})
  }

  render() {
    
    return (

      <div className="App log-screen">
        <Navbar />
        <div className="content-screen log-screen-content">
          {/* <img className='App-logo-name' src={require('../assets/bacalao-logo-with-name.svg')} alt="" /> */}
          <LogsPreviewList
            {...this.props}
            handleClick = {this.handleClick.bind(this)}
          />
          {this.state.logDisplayed !== null ? <LogDisplayed
           log={this.state.logDisplayed}
           {...this.props}
           handleClick = {this.handleClick.bind(this)}
           /> : null}
        </div>
      </div>
          
      );
    }
  }

const LogsScreen = connect(mapStateToProps)(ConnectedLogsScreen);

export default LogsScreen;


