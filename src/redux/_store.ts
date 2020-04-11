import { createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './_root-reducer';


const middlewares : Array<Middleware> = [  ];

if (process.env.NODE_ENV === 'development') middlewares.push(logger)

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};