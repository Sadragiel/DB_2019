import commonStoreCreator from './../generic';

import { combineReducers } from 'redux';

import selfTypes from './types';
import selfActions from './actions';

const storeName = 'card';

const combinedReducer = combineReducers({
    data: commonStoreCreator.reducers(storeName)
});

export const actions = {
    ...commonStoreCreator.actions(storeName),
    ...selfActions(storeName),
};

export const types = {
    ...commonStoreCreator.types(storeName),
    ...selfTypes(storeName),
};

export const selectors = {
    ...commonStoreCreator.selectors(storeName)
};

export default combinedReducer;