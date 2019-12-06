import types from './types';
import { createAction } from 'redux-actions';

export default storeName => {
    const storeTypes = types(storeName);

    return {
        requestList: createAction(storeTypes.REQUEST_LIST),
        requestInstance: createAction(storeTypes.REQUEST_INSTANCE),
        requestUpdate: entyty => createAction(storeTypes.REQUEST_UPDATE)({entyty}),
        requestCreate: entyty => createAction(storeTypes.REQUEST_CREATE)({entyty}),
        requestDelete: id => createAction(storeTypes.REQUEST_CREATE)({id}),
        setList: list => createAction(storeTypes.SET_LIST)({list}),
        setInstance: instance => createAction(storeTypes.SET_INSTANCE)({instance})
    }
}