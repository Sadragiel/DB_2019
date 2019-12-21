import commonStoreCreator from './../generic';

import playerActions from './actions';
import playerReducers from './reducers';
import playerTypes from './types';
import playerSelectors from './selectors';

import { combineReducers } from 'redux';

const storeName = 'player';

const combinedReducer = combineReducers({
    data: commonStoreCreator.reducers(storeName),
    extra: playerReducers
});

export const actions = {
    ...playerActions(storeName),
    ...commonStoreCreator.actions(storeName)
};

export const types = {
    ...playerTypes(storeName),
    ...commonStoreCreator.types(storeName)
};

export const selectors = {
    ...playerSelectors,
    ...commonStoreCreator.selectors(storeName)
};

export default combinedReducer;