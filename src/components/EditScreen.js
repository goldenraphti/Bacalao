// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import {  addItems, removeItems, logChange } from "../actions/actionCreators";
import '../styles/Form.css';
import store from "../store";
import Navbar from './Navbar';
import EditCardOne from './edit-screens-steps/EditCardOne';
import EditCardTwo from './edit-screens-steps/EditCardTwo';
import EditCardThree from './edit-screens-steps/EditCardThree';
import EditCardFour from './edit-screens-steps/EditCardFour';

const mapDispatchToProps = dispatch => {
    return {
        addItems: (id , sizeQuantityChange) => dispatch(addItems(id , sizeQuantityChange)),
        removeItems: (id , sizeQuantityChange) => dispatch(removeItems(id , sizeQuantityChange)),
        logChange: (date, user, comments, id, sizeQuantityChange) => dispatch(logChange(date, user, comments, id, sizeQuantityChange))
    };
};

const defaultStateResetForm = {
    year: 2018,
    size: 'undefined',
    item: 'undefined',
    amount: undefined,
    comments: '',
    user: '',
    cardToDisplay: EditCardOne,

    isGoing: false,
};

class ConnectedEditScreen extends Component {

    constructor() {
        super();
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.setState({...defaultStateResetForm});
    }

    handleChange(event) {
        console.log('handleChange: ', event.target.id, event.target.value)
        this.setState({ [event.target.id]: event.target.value });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }



    handleSubmit(event) {
        event.preventDefault();

        console.log('state: ', this.state);
        console.log('store.getState(): ', store.getState());

        // dispatch actions logs + add/remove items
        this.props.addItems(`${this.state.year}${this.state.item}` , { [this.state.size] : Number(this.state.amount)});
        const date = new Date().toISOString();
        this.props.logChange(date, this.state.user, this.state.comments, `${this.state.year}${this.state.item}`, { [this.state.size] : this.state.amount} );
        
        // reset the state form values
        this.setState({...defaultStateResetForm});
        // reset the form HTML
        document.getElementById('edit-form').reset();

    }

    // takes the current screen-card, hides it and displays the next screen-card
    nextScreen(currentCard) {
        console.log('nextScreen function', currentCard);

        if (currentCard === EditCardOne) {
            this.setState({cardToDisplay: EditCardTwo})
        } else if (currentCard === EditCardTwo) {
            this.setState({cardToDisplay: EditCardThree})
        } else if (currentCard === EditCardThree) {
            this.setState({cardToDisplay: EditCardFour})
        }
        console.log( this.state.cardToDisplay, currentCard);
        
    }

    render() {
        
        return (
            <div className="App">
                <Navbar />
                <div className="content-screen">
                    <img className='App-logo-name' src={require('../assets/bacalao-logo-with-name.svg')} alt="" />
                    {/* <Form /> */}
                    <this.state.cardToDisplay
                    {...this.props}
                    {...this.state}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    handleInputChange = {this.handleInputChange}
                    nextScreen =  {this.nextScreen.bind(this)}
                    />
                </div>
            </div>
            );
        }
    }

/* Side note:
 the first argument for connect must be null when mapStateToProps is absent
  like in the Form example. Otherwise you’ll get
   TypeError: dispatch is not a function */
const EditScreen = connect(null, mapDispatchToProps)(ConnectedEditScreen);

export default EditScreen;