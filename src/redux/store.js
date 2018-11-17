import {createStore} from 'redux';
import rootReducer from './root.reducer';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, preloadedState);

export default store;