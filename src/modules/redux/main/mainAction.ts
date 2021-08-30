
export const TOGGLE_REQUEST = 'TOGGLE_REQUEST'
export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS'
export const TOGGLE_FAILED = 'TOGGLE_FAILED'

export function toggleRequestAction() {
    return { type: TOGGLE_REQUEST };
}

export function toggleSuccessAction(payload) {
    return { type: TOGGLE_SUCCESS, payload };
}

export function toggleFailedAction(payload) {
    return { type: TOGGLE_FAILED, payload };
}



export const AUTOCOMPLETE_INSTANCE_SET = 'AUTOCOMPLETE_INSTANCE_SET'

export function setAutoCompleteInstanceAction(payload) {
    return { type: AUTOCOMPLETE_INSTANCE_SET, payload };
}

export const CENTER_SET_REQUEST = 'CENTER_SET';
export const CENTER_SET_SUCCESS = 'CENTER_SET_SUCCESS';
export const CENTER_SET_FAILED = 'CENTER_SET_FAILED';


export function setCenterRequestAction(payload) {
    return { type: CENTER_SET_REQUEST, payload };
}

export function setCenterSuccessAction(payload) {
    return { type: CENTER_SET_SUCCESS, payload };
}
export function setCenterFailedAction(payload) {
    return { type: CENTER_SET_REQUEST, payload };
}
