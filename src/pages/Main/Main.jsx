import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentSection } from '../../components/ContentSection/ContentSection';
import { FiltersSection } from '../../components/FiltersSection/FiltersSection';
import { getFilms, resetFilms, resetPage, setSearchQuery } from '../../store/actions/filmsActions';

import './Main.scss'

export const Main = () => {
    const dispatch = useDispatch();

    const films = useSelector(({ films: { data } }) => {
        return data
    })

    const searchQuery = useSelector(({ films: { filters: { query } } }) => {
        return query
    })

    useEffect(() => {
        if (searchQuery) {
            dispatch(setSearchQuery(''))
            dispatch(resetFilms)
            dispatch(resetPage)
            dispatch(getFilms())
        }
        else if (films.length === 0) dispatch(getFilms())
    }, [dispatch, films.length, searchQuery])


    return (
        <div className="container">
            <div className="section">
                <div className="main-wrapper">
                    <div className="main-wrapper__filters">
                        <FiltersSection />
                    </div>
                    <div className="main-wrapper__content">
                        {(!searchQuery) && <ContentSection films={films} getData={() => dispatch(getFilms())} />}
                    </div>
                </div>
            </div>
        </div>
    )
}