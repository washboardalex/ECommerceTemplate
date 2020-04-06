import { createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './_root-reducer';


const middlewares : Array<Middleware> = [ logger ];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;