
function modifyQuantity(state=[], action) {
    
    switch(action.type) {
        case 'REMOVE_ITEMS' :
            console.log('removing items from the inventory', state, action);
            // return the new state with the new comment
            return state;
        case 'ADD_ITEMS' :
            console.log('adding items to the inventory', state, action);

            const i = state.findIndex( stateItem =>  stateItem.id === action.id);
            const sizeName= Object.keys(action.sizeQuantityChange)[0];
            const newAmountAfterSubstraction = state[i].size[sizeName] - Object.values(action.sizeQuantityChange)[0];
            console.log(state[i].size, action.sizeQuantityChange)
            console.log( 'preparing substraction' , 'sizeName', Object.keys(action.sizeQuantityChange)[0], 'old amount: ', state[i].size[Object.keys(action.sizeQuantityChange)[0]], 'new amount: ', Object.values(action.sizeQuantityChange)[0] );
            console.log('new amount', newAmountAfterSubstraction);
            const newItemModified = {...state[i], size : {...state[i].size, [sizeName]: newAmountAfterSubstraction} }
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