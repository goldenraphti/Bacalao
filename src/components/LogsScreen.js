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
      windowWidth: undefined
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  // handleResize to update layout depending if mobile or desktop, so hide or display LogsPreviewList when LogDisplyed is displayed
  handleResize = () => {
    this.setState({windowWidth: window.innerWidth});
    console.log(this.state);
  }

  // takes the id of the log preview clicked, pass it to state to display it big
  handleClick(log) {
    console.log('log',log)
    this.setState({logDisplayed: log});
    // if on mobile/tablet mode, hide LogsPreviewList when open a DisplayedLog. Make sure the value of innerWidth matches the value of media queries in the css
    window.innerWidth < 900 ? console.log('mobile') : console.log('desktop') ;
  }

  render() {
    
    return (

      <div className="App log-screen">
        <Navbar />
        <div className="content-screen log-screen-content">
          { this.state.windowWidth < 900 && this.state.logDisplayed !== null ? null : <LogsPreviewList
            {...this.props}
            handleClick = {this.handleClick.bind(this)}
          />}
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


