import { useEffect, useState } from "react";

import { isIdinFavourites, toggleFavourites } from "./favourites";

const useFavorites = (item, user) => {
    const [fav, setFav] = useState(null);

    useEffect(() => {
        setFav(isIdinFavourites(item.id, user))
    }, [item, user]);

    const handleFavourites = (e) => {
        e.stopPropagation()
        setFav(!fav)
        toggleFavourites(item.id, user)
    }
    return [fav, handleFavourites];
};

export default useFavorites;