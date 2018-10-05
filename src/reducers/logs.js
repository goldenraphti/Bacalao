// a reducer takes in 2 things:

// 1- the action (info about what happened)
// 2- copy of current state


import React from 'react';

function logs(state=[], action) {

    console.log('inside logs', state, action)
    
    switch(action.type) {
        case 'NEW_LOG' :
            // update incremented like photo
            console.log('logging last change', state, action);
            return state;
            
        default: 
            return state;
    }
    
}

export default logs;