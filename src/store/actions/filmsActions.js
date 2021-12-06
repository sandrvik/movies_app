import axios from "axios"
import apiConfig from "../../api/apiConfig"
import { FILMS_TYPES } from "../actionTypes"
import { resetErrors, setError } from "./errorsActions"

export const setFilms = (films) => {
    return {
        type: FILMS_TYPES.SET_FILMS,
        payload: films
    }
}

export const resetFilms = {
    type: FILMS_TYPES.RESET_FILMS,
}

export const startLoading = {
    type: FILMS_TYPES.START_LOADING
}

export const changePage = (page) => {
    return {
        type: FILMS_TYPES.CHANGE_PAGE,
        payload: page,
    }
}

export const resetPage = {
    type: FILMS_TYPES.RESET_PAGE
}

export const setMaxPage = (value) => {
    return {
        type: FILMS_TYPES.SET_MAX_PAGE,
        payload: value,
    }
}

export const toggleGenre = (name) => {
    return {
        type: FILMS_TYPES.TOGGLE_GENRE,
        payload: name
    }
}

export const setGenresFilter = (genres) => {
    return {
        type: FILMS_TYPES.SET_GENRES,
        payload: genres
    }
}

export const setSort = (value) => {
    return {
        type: FILMS_TYPES.SET_SORT,
        payload: value
    }
}

export const setDateFrom = (date) => {
    return {
        type: FILMS_TYPES.SET_DATE_FROM,
        payload: date
    }
}

export const setDateTo = (date) => {
    return {
        type: FILMS_TYPES.SET_DATE_TO,
        payload: date
    }
}

export const setRating = (rating) => {
    return {
        type: FILMS_TYPES.SET_RATING,
        payload: rating
    }
}

export const resetFilters = {
    type: FILMS_TYPES.RESET_FILTERS
}

export const setSearchQuery = (query) => {
    return {
        type: FILMS_TYPES.SET_SEARCH_QUERY,
        payload: query
    }
}


export const getFilms = (type) => async (dispatch, getState) => {
    try {
        dispatch(resetErrors)
        dispatch(startLoading)
        let response;

        switch (type) {
            case 'search':
                response = await axios.get(`${apiConfig.baseUrl}search/movie?${apiConfig.apiKey}`, {
                    params: {
                        page: getState().films.pagination.currentPage,
                        query: getState().films.filters.query
                    }
                })
                break
            default:
                response = await axios.get(`${apiConfig.baseUrl}discover/movie?${apiConfig.apiKey}`, {
                    params: {
                        ...getState().films.filters,
                        with_genres: '' + getState().films.filters.with_genres,
                        page: getState().films.pagination.currentPage,
                        'vote_average.gte': getState().films.filters.rating[0],
                        'vote_average.lte': getState().films.filters.rating[1],
                    }
                })
        }

        dispatch(setMaxPage(response.data.total_pages))
        dispatch(setFilms(response.data.results.length ? response.data.results : 'Films Not Found'))
    } catch (err) {
        dispatch(setError(err.message))
    }
}

export const loadFavs = (ids) => async (dispatch) => {
    dispatch(resetErrors)
    dispatch(startLoading)
    try {
        const response = await Promise.all(ids.map(id => {
            return new Promise(async (resolve) => {
                const response = await axios.get(`${apiConfig.baseUrl}movie/${id}?${apiConfig.apiKey}`)
                resolve(response.data)
            })
        }))
        dispatch(setFilms(response.length ? response : 'Favorites list is empty'))
    } catch (err) {
        dispatch(setError(err.message))
    }
}