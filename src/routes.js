import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Main } from "./pages/Main/Main";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Search } from "./pages/Search/Search";

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
    }
]