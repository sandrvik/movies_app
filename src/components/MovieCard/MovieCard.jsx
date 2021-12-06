import React from 'react';
import { useHistory } from 'react-router';

import useProgressiveImg from '../../helpers/useProgresiveImage';
import apiConfig from '../../api/apiConfig';

import notFound from '../../assets/notFound.svg'
import { Rating } from '@mui/material';
import { Heart } from '../Heart/Heart';
import './MovieCard.scss';

export const MovieCard = ({ film, user }) => {
    const history = useHistory()
    const link = `movie/${film.id}`

    const [src, { blur }] = useProgressiveImg(`${apiConfig.w200Image(film.poster_path || film.backdrop_path)}`,
        `${apiConfig.w500Image(film.poster_path || film.backdrop_path)}`);

    return (
        <div onClick={() => history.push(link)} className="card-wrapper">
            <div className="movie-card" style={{
                backgroundImage: film.poster_path ? `url(${src})` : `url(${notFound})`,
                filter: (film.poster_path && blur) ? "blur(5px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out"
            }}>
                <Heart item={film} user={user} className="movie-card__fav" />
            </div>
            <Rating
                name="read-only"
                value={+((film.vote_average / 2).toFixed(1))}
                readOnly
                size="medium"
                precision={0.1}
            />
            <h3>{film.title || film.name}</h3>
        </div >
    )
}