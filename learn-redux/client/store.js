import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducers
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create object for the default data
const defaultState = {
	posts,
	comments
}

const store = createStore(rootReducer, defaultState);

// named export
export const history = syncHistoryWithStore(browserHistory, store);

// default export
export default store;