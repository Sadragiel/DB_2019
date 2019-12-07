import types from './types';
import { createAction } from 'redux-actions';

export default storeName => {
    const storeTypes = types(storeName);

    return {
        requestList: createAction(storeTypes.REQUEST_LIST),
        requestInstance: createAction(storeTypes.REQUEST_INSTANCE),
        requestUpdate: entity => createAction(storeTypes.REQUEST_UPDATE)({entity}),
        requestCreate: entity => createAction(storeTypes.REQUEST_CREATE)({entity}),
        requestDelete: id => createAction(storeTypes.REQUEST_DELETE)({id}),
        setList: list => createAction(storeTypes.SET_LIST)({list}),
        setInstance: instance => createAction(storeTypes.SET_INSTANCE)({instance})
    }
}