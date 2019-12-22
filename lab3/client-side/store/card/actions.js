import types from './types';
import { createAction } from 'redux-actions';

export default storeName => {
    const storeTypes = types(storeName);

    return {
        requestListByOwner: createAction(storeTypes.REQUEST_BY_OWNER),
        fullTextSearch: searchString => createAction(storeTypes.FULL_TEXT_SEARCH)(searchString),
    }
}