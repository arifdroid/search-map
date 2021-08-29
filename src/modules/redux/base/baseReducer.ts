import { BASE_FAILED, BASE_REQUEST, BASE_SUCCESS } from "./baseAction";

const initialState = {
    loading: false,
    data: {},
    error:{}
}


const baseReducer = (state = initialState, { type, payload }) => {
    if (type === BASE_REQUEST) {
        return {
            ...state,
            loading: true,
        };
    }
    if (type === BASE_SUCCESS) {
        return {
            ...state,
            loading: false,
            data:payload
        };
    }

    if (type === BASE_FAILED) {
        return {
            ...state,
            loading: false,
            error:payload
        };
    }



    return state;
};

export default baseReducer;
