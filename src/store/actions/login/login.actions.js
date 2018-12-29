import { VERIFY_USER, LOG_OUT } from './';

export function verifyUser(payload) {
    return {
        type: VERIFY_USER,
        payload
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}