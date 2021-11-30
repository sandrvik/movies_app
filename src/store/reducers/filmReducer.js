import { FILM_TYPES } from "../actionTypes";

const initialState = {
    loading: false,
    data: {},
}

export default function filmReducer(state = initialState, action) {
    switch (action.type) {
        case FILM_TYPES.SET_FILM:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case FILM_TYPES.START_FILM_LOADING:
            return {
                ...state,
                loading: true
            };
        case FILM_TYPES.RESET_FILM:
            return {
                ...state,
                data: {}
            };
        default: return state
    }
}