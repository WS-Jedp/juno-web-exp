import React from 'react'

import { Header } from '../../containers/header'
import { ContactContainer } from '../../containers/contact'

export const BasicLayout:React.FC = ({ children }) => {

    return (
        <section className="bg-primary basic-layout">
            <Header />
            <section className="bg-primary basic-layout__content">
                {
                    children
                }
            </section>
            <ContactContainer 
                color="primary"
            />
        </section>
    )
}