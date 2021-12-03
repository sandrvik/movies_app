import { AUTH_TYPES } from "../actionTypes"

const initialState = {
    isAuthenticated: false,
    user: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_TYPES.LOG_IN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            }
        case AUTH_TYPES.LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        default: return state
    }
}