
export const BASE_REQUEST = 'BASE_REQUEST'
export const BASE_SUCCESS =  'BASE_SUCCESS'
export const BASE_FAILED = 'FAILED'


export function baseRequestAction(payload) {
    return { type: BASE_REQUEST, payload };
}

export function baseSuccessAction(payload) {
    return { type: BASE_SUCCESS, payload };
}

export function baseFailedAction(payload) {
    return { type: BASE_FAILED, payload };
}