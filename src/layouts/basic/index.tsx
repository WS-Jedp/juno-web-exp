import React from 'react'

import { Header } from '../../containers/header'

export const BasicLayout:React.FC = ({ children }) => {

    return (
        <section className="bg-primary basic-layout">
            <Header />
            <section className="bg-primary basic-layout__content">
                {
                    children
                }
            </section>
        </section>
    )
}