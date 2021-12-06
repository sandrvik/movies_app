import axios from "axios"
import apiConfig from "../../api/apiConfig"
import { FILM_TYPES } from "../actionTypes"
import { resetErrors, setError } from "./errorsActions"

export const startLoading = {
    type: FILM_TYPES.START_FILM_LOADING
}

export const getFilm = (film) => {
    return {
        type: FILM_TYPES.SET_FILM,
        payload: film
    }
}

export const resetMovie = {
    type: FILM_TYPES.RESET_FILM
}

export const loadFilm = (id) => async (dispatch) => {
    dispatch(resetErrors)
    dispatch(startLoading)
    try {
        const response = await axios.get(`${apiConfig.baseUrl}movie/${id}?${apiConfig.apiKey}`)
        dispatch(getFilm(response.data))
    } catch (err) {
        dispatch(setError(err.message))
    }
}