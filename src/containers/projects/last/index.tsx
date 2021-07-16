import React from 'react'
import { Project } from '@prisma/client'

import { Content } from '../../../components/content'
import { StoryCard } from '../../../components/stories/card'
import { ButtonLink } from '../../../components/buttons/link'

interface LastProjectsContainer {
    lastProjects: Project[],
    color?: 'primary' | 'secondary'
}

export const LastProjectsContainer:React.FC<LastProjectsContainer> = ({ lastProjects, color = "secondary" }) => {

    return (
        <section className={`bg-${color} last-projects-container`}>
            <Content
                    position="start"
                    size="mid"
                >
                    <h2 className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Last Projects</h2>
                    <p className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Find out the last projects that Juno has been working on.</p>
            </Content>
            <article className="flex last-projects-container__projects">

                <ul className="flex flex-row last-projects-container__projects-list">
                    {
                        lastProjects.map(project => (
                            <StoryCard 
                                key={project.id}
                                title={project.name}
                                link={`/project/${project.id}`}
                                size="md"
                                category={project.category}
                                imageUrl={project.cover}
                                color={color === 'secondary' ? 'primary' : 'secondary'}
                            />
                        ))
                    }
                </ul>

                <ButtonLink 
                    link="/projects"
                    title="See All"
                    color={color === 'secondary' ? 'primary' : 'secondary'}
                />

                
            </article>
        </section>
    )

}