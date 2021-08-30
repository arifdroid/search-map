
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY'
// export const ADD_TO_HISTORY_SUCCESS = 'ADD_TO_HISTORY_SUCCESS'
export const DELETE_RECENT_HISTORY = 'DELETE_RECENT_HISTORY'



export function addToHistoryAction(payload) {
    return { type: ADD_TO_HISTORY, payload };
}

export function deleteRecentAction() {
    return { type: DELETE_RECENT_HISTORY };
}
