import React from 'react'
import { useDispatch } from 'react-redux';
import { changePage, getFilms, resetFilters } from '../../store/actions/filmsActions';
import BasicSelect from '../BasicSelect/BasicSelect'
import { DateFilter } from '../DateFilter/DateFilter'
import { GenresFilter } from '../GenresFilter/GenresFilter'
import { OutlineButton } from '../Button/Button'
import { RatingSlider } from '../RatingSlider/RatingSlider';

import './FiltersSection.scss'

export const FiltersSection = () => {
    const dispatch = useDispatch()

    const applyFilters = () => {
        dispatch(changePage(1))
        dispatch(getFilms())
    }

    return (
        <div className="filters">
            <BasicSelect />
            <GenresFilter />
            <DateFilter />
            <RatingSlider />
            <div className="filters__buttons">
                <OutlineButton onClick={applyFilters}>Apply filters</OutlineButton>
                <OutlineButton className="small" onClick={() => dispatch(resetFilters)}>Reset filters</OutlineButton>
            </div>
        </div>
    )
}