import { combineReducers } from 'redux';

import logs from './logs';
import inventory from './inventory';

const rootReducer = combineReducers({ logs, inventory });

export default rootReducer;
