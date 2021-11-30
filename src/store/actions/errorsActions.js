import { ERRORS_TYPES } from "../actionTypes"

export const setError = (error) => {
    return {
        type: ERRORS_TYPES.SET_ERROR,
        payload: error
    }
}

export const resetErrors = {
    type: ERRORS_TYPES.RESET_ERRORS
}

export const deleteError = (id) => {
    return {
        type: ERRORS_TYPES.DELETE_ERROR,
        payload: id
    }
}