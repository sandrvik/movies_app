import { AUTH_TYPES } from "../actionTypes"


export const logIn = (user) => {
    return {
        type: AUTH_TYPES.LOG_IN,
        payload: user
    }
}

export const logOut = {
    type: AUTH_TYPES.LOG_OUT
}