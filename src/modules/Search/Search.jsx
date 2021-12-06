import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentSection } from '../../components/ContentSection/ContentSection';
import { resetFilms, resetPage, getFilms } from '../../store/actions/filmsActions';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const Search = () => {
    const dispatch = useDispatch()

    const films = useSelector(({ films: { data } }) => {
        return data
    })

    const searchQuery = useSelector(({ films: { filters: { query } } }) => {
        return query
    })

    useEffect(() => {
        if (searchQuery === '') {
            dispatch(resetFilms)
            dispatch(resetPage)
        }
    }, [dispatch, searchQuery])

    return (
        <div className="container">
            <div className="section">
                <SearchBar />
                {searchQuery && <ContentSection films={films} getData={() => dispatch(getFilms('search'))} />}
            </div>
        </div>
    )
}