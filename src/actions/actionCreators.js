// log last change made in journal
export function logChange(logAction) {
    return {
        type: 'NEW_LOG',
        logAction,
    }
}


// add items to inventory
export function addItems(id ,  sizeQuantity) {
    return {
        type: 'ADD_ITEMS',
        id,
        sizeQuantity,
    }
}


// remove items from inventory
export function removeItems(id , size, quantity) {
    return {
        type: 'REMOVE_ITEMS',
        id,
        size,
        quantity,
    }
}