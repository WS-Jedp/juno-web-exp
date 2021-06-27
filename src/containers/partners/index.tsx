import React from 'react'
import { Partner } from '@prisma/client'

import { Content } from '../../components/content'
import { AllyCard } from '../../components/allies/card'

interface PartnersContainer {
    partners: Partner[],
    color?: 'primary' | 'secondary'
}

export const PartnersContainer:React.FC<PartnersContainer> = ({ partners, color = 'secondary' }) => {

    return (
        <section className={`bg-${color} partners-container`}>
            <Content
                position="end"
                size="mid"
            >
                <h2 className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Partners</h2>
                <p className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Find out who Juno has been working with to create a better world.</p>
            </Content>

            <section className="partners-container__list">

                {
                    partners.map(partner => (
                        <AllyCard 
                            ally={partner.name}
                            category={partner.partnerCategory.toLowerCase()}
                            abstract={partner.abstract}
                            color={color}
                        />
                    ))
                }

            </section>
        </section>
    )
}