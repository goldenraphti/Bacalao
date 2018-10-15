import React, { Component } from "react";
import '../../styles/Form.css';


class EditProgressBar extends Component {


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        
        return (
                <div class="progress-bar-container">
                    <div className="progress-bar progress-bar-background">
                    </div>
                    <div className="progress-bar progress-bar-20">
                    </div>
    
                        <div className="progress-step step-one step-activated"></div>
                        <div className="progress-step step-two"></div>
                        <div className="progress-step step-three"></div>
                        <div className="progress-step step-four"></div>
                        <div className="progress-step step-success"></div>
                </div>

        );
    }
}


export default EditProgressBar;