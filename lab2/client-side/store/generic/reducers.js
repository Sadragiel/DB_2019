import types from './types';

const initialState = {
    list: [],
    instance: {}
};

export default storeName => (state = initialState, action) => {
    const storeTypes = types(storeName);

    switch(action.type) {
        case storeTypes.SET_LIST: 
            return {
                ...state,
                list: [...action.payload.list]
            };
        case storeTypes.SET_INSTANCE: 
            return {
                ...state,
                instance: action.payload.instance
            }
        default: 
            return { ...state }
    }
}