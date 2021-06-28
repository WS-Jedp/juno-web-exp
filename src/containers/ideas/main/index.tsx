import React, { useState } from 'react'
import { IdeaProps } from '../../../pages/ideas/index'

import { Content } from '../../../components/content'
import { IdeaCard } from '../../../components/ideas/card'
import { ButtonCircle } from '../../../components/buttons/circle'
import { ButtonLink } from '../../../components/buttons/link'

interface MainIdeasContainer {
    color?: 'primary' | 'secondary',
    ideas: IdeaProps[],
    action: () => void
}

export const MainIdeasContainer:React.FC<MainIdeasContainer> = ({ ideas, action, color = 'primary' }) => {

    const [mainIdeas, setMainIdeas] = useState<IdeaProps[]>(ideas)

    return (
        <section className={`bg-${color} main-ideas-container`}>

            <Content
                color={color === 'primary' ? 'white' : 'black'}
                position="end"
                size="mid"
            >
                <h2>Explore</h2>
                <p>Find out the lasts ideas that Juno has been working on</p>
            </Content>

            <article className="flex align-center justify-between main-ideas-container__ideas">
                <ButtonLink 
                    link="/projects/all"
                    title="See All"
                    color={color === 'primary' ? 'secondary' : 'primary'}
                />
                <div className="flex flex-row main-ideas-container__ideas-list">
                    {
                        mainIdeas.map(idea => (
                            <IdeaCard 
                                title={idea.title}
                                imageUrl={idea.cover}
                                abstract={idea.introductoryQuestion}
                                category={idea.category}
                                link={`/idea/${idea.id}`}
                                size="lg"
                            />
                        ))
                    }
                </div>
            </article>

        </section>
    )
}