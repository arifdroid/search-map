import { AUTOCOMPLETE_INSTANCE_SET, PLACE_CHANGED_FAILED, PLACE_CHANGED_REQUEST, PLACE_CHANGED_SUCCESS, SEARCH_AUTO_FAILED, SEARCH_AUTO_REQUEST, SEARCH_AUTO_SUCCESS, TOGGLE_FAILED, TOGGLE_REQUEST, TOGGLE_SUCCESS } from "./mainAction";

interface mainStateProp{
    loading: boolean,
    isDarkTheme: boolean,
    searchGoogleData:Array<{}>,
    error:{},
    autoCompleteInstance:any
}


const initialState : mainStateProp= {
    loading: false,
    isDarkTheme: true,
    searchGoogleData:[],
    error:{},
    autoCompleteInstance:null
}


const mainReducer = (state = initialState, { type, payload }) => {
    if (type === TOGGLE_REQUEST) {
        return {
            ...state,
            loading: true,            
        };
    }
    if (type === TOGGLE_SUCCESS) {
        return {
            ...state,
            loading: false,
            isDarkTheme: !state.isDarkTheme
        };
    }

    if (type === TOGGLE_FAILED) {
        return {
            ...state,
            loading: false,
            error:payload
        };
    }

    if (type === SEARCH_AUTO_REQUEST) {
        return {
            ...state,
            loading: true,            
        };
    }
    if (type === SEARCH_AUTO_SUCCESS) {
        return {
            ...state,
            loading: false,
            searchGoogleData:payload
            
        };
    }

    if (type === SEARCH_AUTO_FAILED) {
        return {
            ...state,
            loading: false,
            error:payload
        };
    }

    if (type === PLACE_CHANGED_REQUEST) {
        return {
            ...state,
            loading: true,            
        };
    }
    if (type === PLACE_CHANGED_SUCCESS) {
        return {
            ...state,
            loading: false,
            searchGoogleData:payload
            
        };
    }

    if (type === PLACE_CHANGED_FAILED) {
        return {
            ...state,
            loading: false,
            error:payload
        };
    }

    if (type === AUTOCOMPLETE_INSTANCE_SET) {
        return {
            ...state,
            loading: false,
            autoCompleteInstance:payload
        };
    }



    return state;
};

export default mainReducer;
