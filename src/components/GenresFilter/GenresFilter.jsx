import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import apiConfig from '../../api/apiConfig';
import { toggleGenre } from '../../store/actions/filmsActions';
import { ToggleButton } from '../ToggleButton/ToggleButton';

import './GenresFilter.scss'

export const GenresFilter = () => {
    const dispatch = useDispatch();

    const stateGenres = useSelector(({ films: { filters: { with_genres } } }) => with_genres)

    const [genres, setGenres] = useState([])
    const handleClick = (id) => {
        dispatch(toggleGenre(id))
    }

    const getGenres = async () => {
        const response = await axios.get(`${apiConfig.baseUrl}genre/movie/list?${apiConfig.apiKey}&language=en-US`);
        setGenres(response.data.genres)
    }

    const spawnGenres = (genres) => {
        return genres.map(genre => {
            return <ToggleButton
                isActive={stateGenres.includes(genre.id)}
                key={genre.id}
                name={genre.name}
                onClick={() => handleClick(genre.id)}
            />
        })
    }
    useEffect(() => getGenres(), [])

    return (
        <div className="genres">
            <h3 style={{ width: '100%' }}>Genres</h3>
            {spawnGenres(genres)}
        </div >
    )
}