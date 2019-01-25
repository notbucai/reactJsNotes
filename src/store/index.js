import { createStore, compose, applyMiddleware } from 'redux';

import reducer from "./reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import satas from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const enhancer = composeEnhancers(
    applyMiddleware(...[sagaMiddleware, thunk])
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(satas);

export default store;