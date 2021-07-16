import React from 'react'
import { Skill } from '../../../tools/content/vitae'

import { KnowledgeCard } from '../../../components/knowledges/card'

interface ListKnowledges {
    knowledges: Skill[],
    title: string
}

export const ListKnowledgesContainer:React.FC<ListKnowledges> = ({ knowledges, title }) => {
    return (
        <article className="knowledges-list">
            <h3 className="font-serif">{title}</h3>
            <ul className="flex flex-row align-start justify-start knowledges-list__list">
                {
                    knowledges.map(knowledge => (
                        <li key={knowledge.id}>
                            <KnowledgeCard 
                                img={knowledge.image}
                                knowledge={knowledge.skill}
                                time={knowledge.time}
                            />
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}