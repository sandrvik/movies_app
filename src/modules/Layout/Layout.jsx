import React from 'react'

import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'


export const Layout = (props) => {

    return (
        <div className="container">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}