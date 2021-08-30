import {  CENTER_SET_FAILED, CENTER_SET_REQUEST, CENTER_SET_SUCCESS,AUTOCOMPLETE_INSTANCE_SET, TOGGLE_FAILED, TOGGLE_REQUEST, TOGGLE_SUCCESS } from "./mainAction";

interface mainStateProp {
    loading: boolean,
    isDarkTheme: boolean,
    searchGoogleData: Array<{}>,
    error: {},
    autoCompleteInstance: any,
    center: { lat: number, lng: number },
    zoom:number
}


const initialState: mainStateProp = {
    loading: false,
    isDarkTheme: true,
    searchGoogleData: [],
    error: {},
    autoCompleteInstance: null,
    center: {
        lat: 3.140853,
        lng: 101.693207
    },
    zoom:5
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
            error: payload
        };
    }


    if (type === AUTOCOMPLETE_INSTANCE_SET) {
        return {
            ...state,
            loading: false,
            autoCompleteInstance: payload
        };
    }

    if (type === CENTER_SET_REQUEST) {
        return {
            ...state,
            loading: true,
            center:payload 
        };
    }
    if (type === CENTER_SET_SUCCESS) {
        
        return {
            ...state,
            loading: false,
            center:payload ,
            zoom:17
        };
    }

    if (type === CENTER_SET_FAILED) {
        return {
            ...state,
            loading: false,
            error:payload 
        };
    }



    return state;
};

export default mainReducer;
