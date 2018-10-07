import React, { Component } from 'react';
import '../../styles/Logs.css';


class LogDisplayed extends Component {



  componentDidMount() {
    // Object.keys( this.props.logs.filter( logFiltered => logFiltered.id === this.props.log )[0].productsSold).filter(item => item !== 'total').map(item => console.log(item))
  }


  render() {

    let log = this.props.logs.filter( logFiltered => logFiltered.id === this.props.log )[0];

    return (
      <div className="LogDisplayed">
        <div className="displayed-card">
          <div className="log-displayed-title">{log.concert} concert</div>
          <div className="log-displayed-details">
            <div className="log-displayed-user log-details-part">
              <div className="img-details-log-displayed">
                <img className='' src={require('../../assets/user.svg')} alt="" />                
              </div>
              {log.user}
            </div>
            <div className="log-displayed-date log-details-part">
                <div className="img-details-log-displayed">
                  <img className='' src={require('../../assets/calendar.svg')} alt="" />                
                </div>
                <div className="info-details-log-displayed">
                  <div>
                    {new Date(log.date).toLocaleDateString()}
                  </div>
                  <div>
                    {new Date(log.date).toLocaleTimeString()}
                  </div>
                </div>
            </div>
            <div className="log-displayed-id log-details-part">
              <div className="img-details-log-displayed">
                <img className='' src={require('../../assets/id.svg')} alt="" />                
              </div>
              {log.id}
            </div>
          </div>
          <div className="log-displayed-infos">
          <div className="product-details">
                 	<p>Code</p>
                 	<p>Product</p>
                 	<p>Type</p>
                 	<p>Quantities</p>
          </div>
               {Object.keys(log.productsSold).filter(item => item !== 'total').map(item =>  (
                 <div className="product-details">
                 	<p>{item}</p>
                 	<p>{log.productsSold[item].name}</p>
                 	<p>{log.productsSold[item].type}</p>
                 	<ul>{Object.keys(log.productsSold[item].quantities).map( size => (
                     <li>{size}:{log.productsSold[item].quantities[size]}</li>
                   ))}
                   </ul>
                 </div>)
               )}
          </div>
        </div>
      
      </div>
    );
  }
}

export default LogDisplayed;