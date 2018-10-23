import React, { Component } from "react";
import '../../styles/Form.css';


class EditProgressBar extends Component {


    componentDidMount() {
        console.log(this.props.cardToDisplay);
        console.log(this.props.screen);
        console.log(this.props.screen !== "EditCardSuccess");
        console.log('progressbar', this.props.screen);
    }

    componentWillUnmount() {
    }

    render() {

        const screen = this.props.screen;

        const formProgression = () => {
            if (screen == 1) {
                return '0';
            } else if (screen == 2) {
                return '20';
            } else if (screen == 3) {
                return '40';
            } else if (screen == 4) {
                return '60';
            } else if (screen == "success") {
                return '80';
            }
        }

        let iconFinalStep = screen != "success" ? 'liftoff-light-dark-grey' : 'rocket-palette-1-3';
        
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