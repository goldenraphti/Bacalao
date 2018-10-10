import React, { Component } from 'react';
import '../../styles/Logs.css';


class LogsPreviewList extends Component {



  componentDidMount() {
  }


  render() {
    return (
      <div className="LogsPreviewList">

        <ul className="column-list">
          <li className="log-card card-header">Logs List</li>
          {this.props.logs.map(el => (
            <li className={ el.id === this.props.logDisplayed ? "log-card logs-preview log-selected" : "log-card logs-preview"} key={el.date}>
              <button onClick={() => this.props.handleClick(el.id)} className="card-preview-button">
                  <div className="log-preview-left"><p>
                      Date: {new Date(el.date).toLocaleDateString()}
                      <br/>Concert: <span className="dark">{el.concert}</span>
                  </p>
                  </div>
                  <div className="log-preview-right dark">
                  {el.productsSold.total}
                  </div>
                </button>
              </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default LogsPreviewList;