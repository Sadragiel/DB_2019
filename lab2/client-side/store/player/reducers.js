const initialState = {};

export default (state = initialState, action)  => {
    switch(action.type) {
        //todo some extra action processing
        default: 
            return { ...state }
    }   
};