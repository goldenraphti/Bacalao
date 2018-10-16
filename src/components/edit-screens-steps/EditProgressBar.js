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

        const cardToDisplay = this.props.cardToDisplay;

        const formProgression = () => {
            if (cardToDisplay.name == "EditCardOne") {
                return '0';
            } else if (cardToDisplay.name == "EditCardTwo") {
                return '20';
            } else if (cardToDisplay.name == "EditCardThree") {
                return '40';
            } else if (cardToDisplay.name == "EditCardFour") {
                return '60';
            } else if (cardToDisplay.name == "EditCardSuccess") {
                return '80';
            }
        }

        let iconFinalStep = cardToDisplay.name != "EditCardSuccess" ? 'liftoff-light-dark-grey' : 'rocket-palette-1-3';
        
        return (
                <div className="progress-bar-container">
                    <div className="progress-bar progress-bar-background">
                    </div>
                    <div className={`progress-bar progress-bar-${formProgression()}`}>
                    </div>
                    <div className="end-progressbar">
                        <img className="icon-progress" src={require(`../../assets/${iconFinalStep}.svg`)} alt="" />
                    </div>
                </div>

        );
    }
}


export default EditProgressBar;