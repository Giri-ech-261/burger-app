import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';
import {createLogger} from 'redux-logger';
import Product from './Product';
import MyPets from './MyPets';
import Articles from './Articles';
import AdminLogin from './AdminLogin';
import Forms from './form';
import StoreLocator from './StoreLocator';
import Category from './Category';

import {cacheMiddleware} from './CacheMiddleware';

let initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    cacheMiddleware,
    sagaMiddleware,
    createLogger(),
];

const appReducer = combineReducers({
    Product,
    MyPets,
    Articles,
    AdminLogin,
    Forms,
    StoreLocator,
    Category
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};


export const store = createStore(rootReducer, initialState, applyMiddleware(
    ...middleware,
));

sagaMiddleware.run(rootSaga);
