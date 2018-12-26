import { VERIFY_USER } from './';

export function verifyUser(payload) {
    return {
        type: VERIFY_USER,
        payload
    }
}