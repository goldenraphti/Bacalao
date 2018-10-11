// a reducer takes in 2 things:

// 1- the action (info about what happened)
// 2- copy of current state

function logs(state=[], action) {

    console.log('inside logs', state, action)
    
    switch(action.type) {
        case 'NEW_LOG' :
            // update incremented like photo
            console.log('logging last change', state, action , action.logAction);

            return [...state, {
                date: action.logAction.date,
                user: action.logAction.user,
                id: action.logAction.id,
                concert: action.logAction.concert,
                comments: action.logAction.comments,
                productsSold: action.logAction.productsSold,
            }];
            
        default: 
            return state;
    }
    
}

export default logs;