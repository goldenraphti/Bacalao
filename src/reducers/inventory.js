function modifyQuantity(state=[], action) {
    
    switch(action.type) {
        case 'REMOVE_ITEMS' :
            console.log('removing items from the inventory', state, action);
            // return the new state with the new comment
            return state;
        case 'ADD_ITEMS' :
            console.log('adding items to the inventory', state, action);

            const i = state.findIndex( stateItem =>  stateItem.id === action.id);
            console.log(state[i].size, action.sizeQuantityChange)
            const newStateItem = Object.assign(state[i].size, action.sizeQuantityChange);
            console.log(state[i], action.sizeQuantityChange);
            // finds the corresponding item and then adds the quantity of the action to the key(size) of the action
            
            return [
                ...state.slice(0,i), // before the one we are updating
                newStateItem,
                ...state.slice(i+1) // after the one we are updating
            ]

        default:
            return state;
    }
    
}

function inventory(state=[], action) {
    console.log('inside inventory' , state, action);
    modifyQuantity(state, action);

    return state;

}

export default inventory;