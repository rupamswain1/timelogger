import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {persistStore} from 'redux-persist';
import {persistReducer1} from './root-reducer';
import {rootSaga} from './root-saga';
const sagaMiddleware=createSagaMiddleware();
//const middleware=[logger,sagaMiddleware];
const middleware=[sagaMiddleware];
export const store=createStore(persistReducer1,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
export const persistor=persistStore(store);