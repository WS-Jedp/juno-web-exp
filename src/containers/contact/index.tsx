import React from 'react'

import { Content } from '../../components/content'
import { ButtonLink } from '../../components/buttons/link'

import { LogoWaves } from '../../components/logos/Waves/black' 

interface ContactContainer {
    color?: 'primary' |  'secondary'
}

export const ContactContainer:React.FC<ContactContainer> = ({ color = 'primary' }) => {

    return (
        <section className={`flex flex-col align-start justify-between bg-${color === 'primary' ? 'pirmary' : 'secondary'} contact-container`}>
            <Content
                color={color === 'primary' ? 'white' : 'black'}
                size="mid"
                position="start"
            >
                <h1 className={color === 'primary' ? 'color-secondary' : 'color-primary'}>Let's Dream Together</h1>
                <p className={color === 'primary' ? 'color-secondary' : 'color-primary'}>Juno works as freelance, it doesn’t matter if you are a company, startup or just a person with ideas in your mind, let’s talk and find the best way to make your ideas and dreams come true.</p>
            </Content>
            <ButtonLink 
                link="/"
                title="me@juno.com"
                color={color === 'primary' ? 'secondary' : 'primary'}
            />
        </section>
    )
}