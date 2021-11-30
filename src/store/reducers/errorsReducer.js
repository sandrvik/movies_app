import { ERRORS_TYPES } from "../actionTypes";

const initialState = {
    errors: []
}

export default function errorsReducer(state = initialState, action) {
    switch (action.type) {
        case ERRORS_TYPES.SET_ERROR:
            return {
                ...state,
                errors: [...state.errors, action.payload]
            };
        case ERRORS_TYPES.RESET_ERRORS:
            return {
                ...state,
                errors: []
            };
        case ERRORS_TYPES.DELETE_ERROR:
            return {
                ...state,
                errors: [...state.errors.filter((_, i) => i !== action.payload)]
            }

        default: return state
    }
}