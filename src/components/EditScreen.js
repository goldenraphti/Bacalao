// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import {  addItems, removeItems, logChange } from "../actions/actionCreators";
import '../styles/Form.css';
import EditCardOne from './edit-screens-steps/EditCardOne';
import EditCardTwo from './edit-screens-steps/EditCardTwo';
import EditCardThree from './edit-screens-steps/EditCardThree';
import EditCardFour from './edit-screens-steps/EditCardFour';
import EditCardSuccess from './edit-screens-steps/EditCardSuccess';

const mapDispatchToProps = dispatch => {
    return {
        addItems: (id , sizeQuantityChange) => dispatch(addItems(id , sizeQuantityChange)),
        removeItems: (id , sizeQuantityChange) => dispatch(removeItems(id , sizeQuantityChange)),
        logChange: (date, user, comments, id, sizeQuantityChange) => dispatch(logChange(date, user, comments, id, sizeQuantityChange))
    };
};

const mapStateToProps = (state) => {
    return { inventory: state.inventory };
};

const defaultStateResetForm = {
    itemsType: [],
    concert: '',
    comments: '',
    user: '',
    cardToDisplay: EditCardOne,
    selectedProducts: [],
};

class ConnectedEditScreen extends Component {

    constructor() {
        super();
        this.state = {
            itemsType: [],
            concert: '',
            comments: '',
            user: '',
            cardToDisplay: EditCardOne,
            selectedProducts: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleInputChange(event) {
        const target = event.target;

        // if deciding itemsType, toggle clicked target from the state array
        if(target.name === 'shirt' || target.name === 'totebag') {
            let newItemsType = this.state.itemsType;
            const indexValue = newItemsType.findIndex( itemType => itemType === target.name);
            indexValue === -1 ? newItemsType.push(target.name) : newItemsType.splice(indexValue, 1);
            this.setState({itemsType : newItemsType})
        } else if (target.type === 'checkbox') {
            let newSelectedProducts = this.state.selectedProducts;
            const indexValue = newSelectedProducts.findIndex( productId => productId === target.name);
            indexValue === -1 ? newSelectedProducts.push(target.name) : newSelectedProducts.splice(indexValue, 1);
            this.setState({selectedProducts : newSelectedProducts})
        } else if ( target.type === 'number') {
            const productIdSize = target.name.split('-');
            const productId = productIdSize[0];
            const size = productIdSize[1];
            const sizeQuantity = { [size] : -Math.abs(Number(target.value)) };
            let constSizeQuantityExtended = {...this.state[productId], ...sizeQuantity};
            this.setState({ [productId] : constSizeQuantityExtended });
        }

    }

    resetForm() {
        console.log('resetting the form');
        this.setState({...defaultStateResetForm});
    }

    handleSubmit(event) {
        event.preventDefault();

        // do ADD_ITEMS for each product-size iterating through each key-entry in this.state
        Object.keys(this.state).filter(stateKey => this.state.selectedProducts.includes(stateKey)).map( id => console.log('id', id, 'this.state.id', this.state[id], 'Object.keys(this.state[id])', Object.keys(this.state[id]).map(size => this.props.addItems( id ,  {[size]: this.state[id][size] }) ) ));

        // do NEW_LOG compiling infos from this.state, especially the keys-sizes > quantity
        // creates unique ID for each new log
        const id = uuidv1();
        const date = new Date().toISOString();

        // creates the big nested productsSold object
        let productsSold;
        Object.keys(this.state).filter(stateKey => this.state.selectedProducts.includes(stateKey)).map( productId => console.log('productId', productId, 'this.state.productId', this.state[productId], 'Object.keys(this.state[productId])', Object.keys(this.state[productId] ) ));
        Object.keys(this.state).filter(stateKey => this.state.selectedProducts.includes(stateKey)).map( productId => {
            let quantities = {};
            quantities = { ...this.state[productId]};
            let quantityParent = {};
            quantityParent = { quantities: quantities};
            const newProductSold = { [productId] : quantityParent }
            productsSold =  { ...productsSold, ...newProductSold };
        } );

        const objectToSend = {
            date: date,
            user : this.state.user,
            id: id,
            concert: this.state.concert,
            comments: this.state.comments,
            productsSold: productsSold };
        console.log(objectToSend);

        this.props.logChange(objectToSend);

        this.setState({cardToDisplay: EditCardSuccess})
        
        // reset the state form values
        // this.setState({...defaultStateResetForm});
        // reset the form HTML
        document.getElementById('edit-form').reset();

    }

    // takes the current screen-card, hides it and displays the next screen-card
    nextScreen(currentCard) {
        if (currentCard === EditCardOne) {
            this.setState({cardToDisplay: EditCardTwo})
        } else if (currentCard === EditCardTwo) {
            this.setState({cardToDisplay: EditCardThree})
        } else if (currentCard === EditCardThree) {
            this.setState({cardToDisplay: EditCardFour})
        }
    }
    // when clicked previous step button at bottom of edit form card
    previousScreen(currentCard) {
        if (currentCard === EditCardTwo) {
            this.setState({cardToDisplay: EditCardOne})
        } else if (currentCard === EditCardThree) {
            this.setState({cardToDisplay: EditCardTwo})
        } else if (currentCard === EditCardFour) {
            this.setState({cardToDisplay: EditCardThree})
        }
    }

    render() {

        const buttonNext = <button type="button" className={ this.state.cardToDisplay === EditCardFour ? "hidden" : null } placeholder=""  onClick={() => this.nextScreen(this.state.cardToDisplay)} >Next<span className="next-arrow moving-arrow">〉</span></button>;
        const buttonSubmit = <button type="submit" className={ this.state.cardToDisplay !== EditCardFour ? "hidden" : null }>submit</button>

        return (
            <div className="App Edit">
                <div className="content-screen">
                    <img className='App-logo-name' src={require('../assets/bacalao-logo-with-name.svg')} alt="" />
                    <form id='edit-form' className='card-shadow card'  onSubmit={this.handleSubmit}>
                    {/* insert form progress bar component here */}
                    <this.state.cardToDisplay
                    {...this.props}
                    {...this.state}
                    handleChange = {this.handleChange}
                    handleInputChange = {this.handleInputChange}
                    />
                    { this.state.cardToDisplay === EditCardSuccess ? null :
                    <div className="buttons-bottom-section">
                        <a href="" className="form-cancel-link" onClick={() => this.resetForm()}>Cancel</a>
                        {/* When submitting make sure every input is filled, and hopefully make sure that the same user did not send a change for the same item && size */}
                        <div className="form-navigation">
                            { this.state.cardToDisplay === EditCardOne ? null : <a href="" className="form-previous-step" onClick={() => this.previousScreen(this.state.cardToDisplay)} ><span className="previous-arrow moving-arrow">〈</span>Previous</a>}
                            {buttonNext}
                            {buttonSubmit}
                        </div>
                    </div>
                }
                </form>
                </div>
            </div>
            );
        }
    }

    // TODO: add eventlistener on labels for using labels for aria when hit Space

/* Side note:
 the first argument for connect must be null when mapStateToProps is absent
  like in the Form example. Otherwise you’ll get
   TypeError: dispatch is not a function */
const EditScreen = connect(mapStateToProps, mapDispatchToProps)(ConnectedEditScreen);

export default EditScreen;