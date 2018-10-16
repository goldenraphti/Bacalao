import React, { Component } from "react";
import '../../styles/Form.css';


class EditProgressBar extends Component {


    componentDidMount() {
        console.log(this.props.cardToDisplay);
        console.log(this.props.cardToDisplay.name);
        console.log(this.props.cardToDisplay.name !== "EditCardSuccess");
    }

    componentWillUnmount() {
    }

    render() {

        let iconFinalStep = this.props.cardToDisplay.name != "EditCardSuccess" ? 'liftoff' : 'rocket';
        
        return (
                <div className="progress-bar-container">
                    <div className="progress-bar progress-bar-background">
                    </div>
                    <div className="progress-bar progress-bar-20">
                    </div>
                    <div className="end-progressbar">
                        <img className='' src={require(`../../assets/${iconFinalStep}.svg`)} alt="" />
                    </div>
                </div>

        );
    }
}


export default EditProgressBar;