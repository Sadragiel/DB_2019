import types from './types';
import { createAction } from 'redux-actions';

export default storeName => {
    const storeTypes = types(storeName);

    return {
        parametrizedSearch: (from, to) => createAction(storeTypes.PARAMETRIZED_SEARCH)({from, to}),
    }
}