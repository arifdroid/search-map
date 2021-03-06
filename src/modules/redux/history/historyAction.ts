
export const ADD_TO_HISTORY_REQUEST = 'ADD_TO_HISTORY_REQUEST'
export const ADD_TO_HISTORY_SUCCESS = 'ADD_TO_HISTORY_SUCCESS'
export const ADD_TO_HISTORY_FAILED = 'ADD_TO_HISTORY_FAILED'


export function addToHistoryRequestAction(payload) {
    return { type: ADD_TO_HISTORY_REQUEST, payload };
}

export function addToHistorySuccessAction(payload) {
    return { type: ADD_TO_HISTORY_SUCCESS, payload };
}

export function addToHistoryFailedAction(payload) {
    return { type: ADD_TO_HISTORY_FAILED, payload };
}



export const DELETE_RECENT_HISTORY_REQUEST = 'DELETE_RECENT_HISTORY_REQUEST'
export const DELETE_RECENT_HISTORY_SUCCESS = 'DELETE_RECENT_HISTORY_SUCCESS'
export const DELETE_RECENT_HISTORY_FAILED = 'DELETE_RECENT_HISTORY_FAILED'

export function deleteRecentRequestAction() {
    return { type: DELETE_RECENT_HISTORY_REQUEST };
}

export function deleteRecentSuccessAction() {
    return { type: DELETE_RECENT_HISTORY_SUCCESS };
}
export function deleteRecentFailedAction(payload) {
    return { type: DELETE_RECENT_HISTORY_FAILED, payload };
}





