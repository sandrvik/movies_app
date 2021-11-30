import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import notFound from '../../assets/notFound.svg'
import useProgressiveImg from '../../helpers/useProgresiveImage';
import apiConfig from '../../api/apiConfig';

import './MovieCard.scss';

export const MovieCard = ({ film }) => {
    const link = `movie/${film.id}`

    const [src, { blur }] = useProgressiveImg(`${apiConfig.w200Image(film.poster_path || film.backdrop_path)}`,
        `${apiConfig.w500Image(film.poster_path || film.backdrop_path)}`);

    return (
        <Link to={link}>
            <div className="movie-card" style={{
                backgroundImage: film.poster_path ? `url(${src})` : `url(${notFound})`,
                filter: (film.poster_path && blur) ? "blur(5px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out"
            }}>
                <Rating
                    name="read-only"
                    value={+((film.vote_average / 2).toFixed(1))}
                    readOnly
                    size="medium"
                    precision={0.1}
                    className="movie-card__rating"
                />
            </div>
            <h3>{film.title || film.name}</h3>
        </Link>
    )
}