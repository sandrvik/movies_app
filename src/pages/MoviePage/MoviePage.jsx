import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { resetMovie, loadFilm } from '../../store/actions/filmActions';
import useProgressiveImg from '../../helpers/useProgresiveImage';
import apiConfig from '../../api/apiConfig';

import './MoviePage.scss';

export const MoviePage = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { id: movieId } = useParams()
    const item = useSelector(({ film: { data } }) => data)

    const [src, { blur }] = useProgressiveImg(`${apiConfig.w500Image(item.backdrop_path || item.poster_path)}`,
        `${apiConfig.originalImage(item.backdrop_path || item.poster_path)}`);

    useEffect(() => {
        dispatch(loadFilm(movieId))
        return () => {
            dispatch(resetMovie)
        }
    }, [dispatch, movieId])

    useEffect(() => {
        const backspace = (e) => {
            if (e.keyCode === 8) {
                history.goBack()
            }
        }
        document.addEventListener('keydown', backspace)
        return () => document.removeEventListener('keydown', backspace)
    }, [history])

    return (
        <>
            {
                item && (
                    <>
                        <div
                            className="banner"
                            style={{
                                backgroundImage: `url(${src})`, filter: blur ? "blur(20px)" : "none",
                                transition: blur ? "none" : "filter 0.3s ease-out"
                            }}>
                        </div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="movie-content__overview">{item.overview}</p>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}