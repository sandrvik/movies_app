import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { changePage } from '../../store/actions/filmsActions';
import { MovieCard } from '../MovieCard/MovieCard';
import { Pagination, Skeleton } from '@mui/material';
import { Box, styled } from '@mui/system';

import './ContentSection.scss';

export const ContentSection = (props) => {
    const dispatch = useDispatch();

    const loading = useSelector(({ films: { loading } }) => {
        return loading
    })
    const pagination = useSelector(({ films: { pagination } }) => {
        return pagination
    })

    const handleChangePage = (_, value) => {
        dispatch(changePage(value))
        props.getData()
        window.scrollTo(0, 0)
    }

    const CustomPagination = styled(Pagination)`
    margin-top: 50px;

    & .MuiPagination-ul {
        justify-content: center;
    }

    & .MuiPaginationItem-text {
        background-color: black;
    color: #dfdfdf;
    font-weight: 600;
  }

  & .Mui-selected {
       color: #ffcc00;
  }
`;

    return (
        <div className="section">
            {typeof (props.films) === 'string' ? <h1 style={{ textAlign: 'center' }}>{props.films}</h1> :
                <div className="movie-grid">
                    {(loading ? Array.from(new Array(20)) : props.films).map((film, id) => (
                        <React.Fragment key={id}>
                            {film ? (
                                <MovieCard film={film} />
                            ) : (
                                <Box sx={{ margin: '20px' }}>
                                    <Skeleton variant="rectangular" width={220} height={340} />
                                </Box>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            }
            {pagination.maxPage > 1 && <CustomPagination
                onChange={handleChangePage}
                count={pagination.maxPage}
                page={pagination.currentPage}
                size="large"
            />}
        </div>
    )
}