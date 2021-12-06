import { Favorite, FavoriteBorder } from '@mui/icons-material';
import React from 'react';
import useFavorites from '../../helpers/useFavorites';

export const Heart = ({ item, user, className }) => {

    const [fav, handleFavourites] = useFavorites(item, user)

    return (
        fav ?
            <Favorite
                className={className}
                onClick={handleFavourites}>
            </Favorite> :
            <FavoriteBorder
                className={className}
                onClick={handleFavourites}>
            </FavoriteBorder>
    )
}