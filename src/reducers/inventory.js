
function modifyQuantity(state=[], action) {
    
    switch(action.type) {
        case 'REMOVE_ITEMS' :
            console.log('removing items from the inventory', state, action);
            // return the new state with the new comment
            return state;
        case 'ADD_ITEMS' :
            console.log('adding items to the inventory', state, action, action.id, action.sizeQuantity);

            const i = state.findIndex( stateItem =>  stateItem.id === action.id);
            const sizeName= Object.keys(action.sizeQuantity);
            console.log(i, sizeName , state[i] , state[i].quantities[sizeName] );
            const newAmountAfterSubstraction = state[i].quantities[sizeName] - action.sizeQuantity[sizeName];
            console.log('amountt before substraction', state[i].quantities[sizeName]  , 'value to substract' , action.sizeQuantity[sizeName] , 'calcul newAmountAfterSubstraction', newAmountAfterSubstraction);
            const newItemModified = {...state[i], quantities : {...state[i].quantities, [sizeName]: newAmountAfterSubstraction} };
            console.log('newItemModified', newItemModified);

            // finds the corresponding item and then adds the quantity of the action to the key(size) of the action

             return [
                ...state.slice(0,i), // before the one we are updating
                newItemModified,
                ...state.slice(i+1) // after the one we are updating]
            ]

        default:
            return state;
    }
    
}

export default modifyQuantity;