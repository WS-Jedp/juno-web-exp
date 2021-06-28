import React from 'react'
import { Idea } from '@prisma/client'

import { defineStoryTypeTitle } from '../../../tools/functions/defineStoryTypeTitle'
import { AvailableStoryTypes } from '../../../tools/types/stories'

import { IdeaCard } from '../../../components/ideas/card'

interface RelatedIdeasContainer {
    color?: 'primary' | 'secondary',
    ideaType: AvailableStoryTypes
    relatedIdeas: Idea[]
}

export const RelatedIdeasContainer:React.FC<RelatedIdeasContainer> = ({ color = 'primary', ideaType, relatedIdeas = [] }) => {

    return (
        <article className={`bg-${color} related-ideas`}>
            <h2 className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Related {defineStoryTypeTitle(ideaType)}</h2>
            <ul className="flex flex-flow related-ideas__list">
                {
                    relatedIdeas.map(idea => (
                        <li key={idea.id}>
                            <IdeaCard 
                                title={idea.title}
                                category={idea.category}
                                abstract={idea.abstract}
                                imageUrl={idea.cover}
                                link={`/ideas/${idea.id}`}
                                size='md'
                            />
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}