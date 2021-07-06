import React, { useState } from 'react'
import { IdeaProps } from '../../../pages/ideas/index'

import { IdeaCard } from '../../../components/ideas/card'
import { ButtonLink } from '../../../components/buttons/link'

interface IdeasList {
    color?: 'primary' | 'secondary',
    ideas: IdeaProps[],
}

export const IdeasList:React.FC<IdeasList> = ({ ideas, color = 'primary' }) => {

    const [currentIdeas, setCurrentIdeas] = useState<IdeaProps[]>(ideas)

    return (
        <section className={`bg-${color} ideas-container`}>
            <article className="flex align-center justify-between ideas-container__ideas">
                <ButtonLink 
                    link="/ideas"
                    title="See All"
                    color={color === 'primary' ? 'secondary' : 'primary'}
                />
                <div className="flex flex-row ideas-container__ideas-list">
                    {
                        currentIdeas.map(idea => (
                            <IdeaCard 
                                title={idea.title}
                                imageUrl={idea.cover}
                                abstract={idea.introductoryQuestion}
                                category={idea.category}
                                link={`/ideas/${idea.id}`}
                                size="lg"
                            />
                        ))
                    }
                </div>
            </article>

        </section>
    )
}