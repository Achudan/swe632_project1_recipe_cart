// In the store the API response and other user data will be stored and can be accessed through out the application
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import allReducers from './reducer';

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);
export default store