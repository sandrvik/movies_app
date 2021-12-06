import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContentSection } from '../../components/ContentSection/ContentSection';
import { resetFilms, resetPage, loadFavs, setSearchQuery } from '../../store/actions/filmsActions';

export const Favorites = ({ user }) => {
    const dispatch = useDispatch();

    const films = useSelector(({ films: { data } }) => {
        return data
    })

    useEffect(() => {
        dispatch(setSearchQuery(''))
        dispatch(resetFilms)
        dispatch(resetPage)
        dispatch(loadFavs(JSON.parse(localStorage.getItem(user)).favs))
        return () => {
            dispatch(resetFilms)
        }
    }, [dispatch, user])

    return (
        <div className="container">
            <div className="section">
                <ContentSection films={films} />
            </div>
        </div>
    )
}