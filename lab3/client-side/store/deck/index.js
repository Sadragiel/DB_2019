import commonStoreCreator from './../generic';

import { combineReducers } from 'redux';

const storeName = 'deck';

const combinedReducer = combineReducers({
    data: commonStoreCreator.reducers(storeName)
});

export const actions = {
    ...commonStoreCreator.actions(storeName)
};

export const types = {
    ...commonStoreCreator.types(storeName)
};

export const selectors = {
    ...commonStoreCreator.selectors(storeName)
};

export default combinedReducer;