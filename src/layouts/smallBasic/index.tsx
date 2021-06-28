import React from 'react'

import { useRouter } from 'next/router'

import { Header } from '../../containers/header'
import { ContactContainer } from '../../containers/contact'
import { Content } from '../../components/content'


interface SmallBasicLayout {
    color?: 'primary' | 'secondary',
    title: string,
    abstract: string
}

export const SmallBasicLayout:React.FC<SmallBasicLayout> = ({ children, color = 'primary', title, abstract }) => {

    const { back } = useRouter()

    return (
        <section className={`relative small-basic-layout`}>
            <Header />
            <article className={`bg-${color} small-basic-layout__header`}>
                <Content
                    color={color === 'primary' ? 'white' : 'black'}
                    position="start"
                    size="full"
                    >
                    <a onClick={() => back()} className="small-basic-layout__go-back">Go Back</a>
                    <h1>{title}</h1>
                    <p>{abstract}</p>
                </Content>
            </article>
            <section className="bg-primary small-basic-layout__content">
                {
                    children
                }
            </section>
            <ContactContainer 
                color={color}
            />

        </section>
    )
}