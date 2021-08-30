
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


export const SEARCH_AUTO_REQUEST = 'SEARCH_AUTO_REQUEST'
export const SEARCH_AUTO_SUCCESS = 'SEARCH_AUTO_SUCCESS'
export const SEARCH_AUTO_FAILED = 'SEARCH_AUTO_FAILED'


export function searchAutoRequestAction(payload) {
    return { type: SEARCH_AUTO_REQUEST, payload };
}

export function searchAutoSuccessAction(payload) {
    return { type: SEARCH_AUTO_SUCCESS, payload };
}

export function searchAutoFailedAction(payload) {
    return { type: SEARCH_AUTO_FAILED, payload };
}

export const AUTOCOMPLETE_INSTANCE_SET = 'AUTOCOMPLETE_INSTANCE_SET'

export function setAutoCompleteInstanceAction(payload) {
    return { type: AUTOCOMPLETE_INSTANCE_SET, payload };
}

export const PLACE_CHANGED_REQUEST = 'PLACE_SEARCH_REQUEST'
export const PLACE_CHANGED_SUCCESS = 'PLACE_SEARCH_SUCCESS'
export const PLACE_CHANGED_FAILED = 'PLACE_SEARCH_FAILED'


export function placeChangedRequestAction(payload) {
    return { type: PLACE_CHANGED_REQUEST, payload };
}

export function placeChangedSuccessAction(payload) {
    return { type: PLACE_CHANGED_SUCCESS, payload };
}

export function placeChangedFailedAction(payload) {
    return { type: PLACE_CHANGED_FAILED, payload };
}