// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log('state.logs', state.logs)
    return { logs: state.logs };
};

const ConnectedListLogs = ({ logs }) => (
    <div id="logs-div">
        <h3>Logs</h3>
        <div className="single-log block">
        {logs.map(el => (
            <li className="list-group-item" key={el.date}>
                Date: {el.date}
                <br/>User: {el.user}
                <br/>Comments: {el.comments}
                <br/>Item ID: {el.id}
                <br/><h4>Quantities:</h4>
                <ul className="list-size-logs">
                    {Object.keys(el.sizeQuantityChange).map( sizeLogKey => (
                        <li className="item-size-log" key={`${el.date}-${sizeLogKey}`}>{sizeLogKey} : {el.sizeQuantityChange[sizeLogKey]}</li>
                    ))}
                </ul>
            </li>
        ))}
        </div>
    </div>
    
);

const List = connect(mapStateToProps)(ConnectedListLogs);

export default List;