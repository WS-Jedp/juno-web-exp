import React from 'react'

import { Header } from '../../containers/header'
import { ContactContainer } from '../../containers/contact'

interface BasicLayout {
    color?: 'primary' | 'secondary'
}

export const BasicLayout:React.FC<BasicLayout> = ({ children, color = 'primary' }) => {

    return (
        <section className="bg-primary basic-layout">
            <Header />
            <section className="bg-primary basic-layout__content">
                {
                    children
                }
            </section>
            <ContactContainer 
                color={color === 'primary' ? 'secondary' : 'primary'}
            />
        </section>
    )
}