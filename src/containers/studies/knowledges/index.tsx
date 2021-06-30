import React from 'react'

import { Content } from '../../../components/content'
import { PilarCard } from '../../../components/pilars/card'

import { KnowledgesContent } from '../../../tools/content/studies'

interface KnowledgesContainer {
    color?: 'primary' | 'secondary',
    position?: 'start' | 'center' | 'end'
}

export const KnowledgesContainer:React.FC<KnowledgesContainer> = ({ position = 'end', color = 'secondary' }) => {
    return (
        <section id="knowledges" className={`relative bg-${color} knowledges-container`}>
            <Content
                position={position}
                color={color === 'primary' ? 'black' : 'white'}
                size="mid"
            >
                <h2 className={`color-${color === 'secondary' ? 'primary' : 'secondary'}`}>Knowledges</h2>
                <p className={`color-${color === 'secondary' ? 'primary' : 'secondary'}`}>Discover all the skills and knowledge Juno has and how they can help make dreams come true.</p>
            </Content>

            <article  className="relative flex flex-row knowledges-container__knowledges">
                <PilarCard 
                    {...KnowledgesContent.science}
                />
                <PilarCard 
                    {...KnowledgesContent.art}
                />
                <PilarCard 
                    {...KnowledgesContent.technology}
                />
            </article>

        </section>
    )
}