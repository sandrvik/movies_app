import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Favorites } from "./modules/Favorites/Favorites";
import { Main } from "./modules/Main/Main";
import { MoviePage } from "./modules/MoviePage/MoviePage";
import { Search } from "./modules/Search/Search";

export const publicRoutes = [
    {
        key: 'signin',
        path: '/signin',
        component: SignIn,
        exact: true,
    },
    {
        key: 'signup',
        path: '/signup',
        component: SignUp,
        exact: true,
    },
]

export const privateRoutes = [
    {
        key: 'main',
        path: '/',
        component: Main,
        exact: true,
    },
    {
        key: 'search',
        path: '/search',
        component: Search,
        exact: true,
    },
    {
        key: 'movie',
        path: '/movie/:id',
        component: MoviePage,
        exact: true,
    },
    {
        key: 'favorites',
        path: '/favorites',
        component: Favorites,
        exact: true,
    },
]