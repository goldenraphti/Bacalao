import { combineReducers } from 'redux';

import logs from './logs';
import inventory from './inventory';
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({logs, inventory, articles: articleReducer  });

export default rootReducer;
