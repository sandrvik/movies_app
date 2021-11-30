import { FILMS_TYPES } from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    pagination: {
        currentPage: 1,
        maxPage: 0,
    },
    filters: {
        sort_by: 'popularity.desc',
        with_genres: [],
        'release_date.gte': null,
        'release_date.lte': new Date(),
        rating: [0, 10],
        query: '',
    }
}

export default function filmsReducer(state = initialState, action) {
    switch (action.type) {
        case FILMS_TYPES.SET_FILMS:
            return {
                ...state,
                data: action.payload,
                loading: false

            };
        case FILMS_TYPES.RESET_FILMS:
            return {
                ...state,
                data: [],
            };
        case FILMS_TYPES.START_LOADING:
            return {
                ...state,
                loading: true
            };
        case FILMS_TYPES.CHANGE_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                }
            };
        case FILMS_TYPES.RESET_PAGE:
            return {
                ...state,
                pagination: {
                    currentPage: 1,
                    maxPage: 0
                }
            };
        case FILMS_TYPES.SET_MAX_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    maxPage: action.payload
                }
            }
        case FILMS_TYPES.TOGGLE_GENRE:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    with_genres: (state.filters.with_genres.indexOf(action.payload) > -1) ?
                        [...state.filters.with_genres.filter(genre => genre !== action.payload)] :
                        [...state.filters.with_genres, action.payload]
                }
            }
        case FILMS_TYPES.SET_GENRES:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    with_genres: action.payload
                }
            }
        case FILMS_TYPES.SET_SORT:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sort_by: action.payload
                }
            }
        case FILMS_TYPES.SET_DATE_FROM:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    'release_date.gte': action.payload
                }
            }
        case FILMS_TYPES.SET_DATE_TO:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    'release_date.lte': action.payload
                }
            }
        case FILMS_TYPES.SET_RATING:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    rating: action.payload
                }
            }
        case FILMS_TYPES.RESET_FILTERS:
            return {
                ...state,
                filters: {
                    sort_by: 'popularity.desc',
                    with_genres: [],
                    'release_date.gte': null,
                    'release_date.lte': new Date(),
                    rating: [0, 10],
                    query: '',
                }
            }
        case FILMS_TYPES.SET_SEARCH_QUERY:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    query: action.payload
                }
            }
        default: return state
    }
}