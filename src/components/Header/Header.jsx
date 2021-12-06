import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AccountMenu } from '../AccountMenu/AccountMenu';

import './Header.scss';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Search',
        path: '/search'
    },
    {
        display: 'Favorites',
        path: '/favorites'
    }
];

export const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <Link to="/">MoviesApp</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                    <AccountMenu />
                </ul>
            </div>
        </div>
    );
}