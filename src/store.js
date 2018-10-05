import { createStore, compose } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import logs from './data/logs';
import inventory from './data/inventory';

// create en object for the default data
const defaultState = {
    logs,
    inventory
};


const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(rootReducer, defaultState, enhancers);

// export const history = syncHistoryWithStore(browserHistory, store);


// enables hot reloading Redux Reducers with Webpack
if(module.hot) {
    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store; 