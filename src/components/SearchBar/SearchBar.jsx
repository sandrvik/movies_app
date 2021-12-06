import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetPage, setSearchQuery, getFilms } from '../../store/actions/filmsActions';
import Button from '../Button/Button';

import '../Input/Input.scss';
import './SearchBar.scss';

export const SearchBar = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const searchQuery = useSelector(({ films: { filters: { query } } }) => {
        return query
    })

    const [searchString, setSearchString] = useState(searchQuery)

    useEffect(() => {
        if (!searchQuery) inputRef.current.focus()
    }, [searchQuery])

    const handleSearchString = ({ target: { value } }) => {
        if (value === ' ') return;
        setSearchString(value)
    }

    const searchFilms = (query) => {
        if (!query.length) return;
        dispatch(setSearchQuery(query))
        dispatch(resetPage)
        dispatch(getFilms('search'))
    }

    return (
        <div className="search__bar">
            <form>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter keyword"
                    value={searchString}
                    onChange={handleSearchString}
                />
                <Button onClick={() => searchFilms(searchString)}>Search</Button>
            </form>
        </div>
    )
}