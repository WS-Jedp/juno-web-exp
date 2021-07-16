import React from 'react'
import { Project } from '@prisma/client'

import { StoryCard } from '../../../components/stories/card'
import { ProjectProp } from '../../../pages/projects/story/[id]'

interface RelatedProjectsContainer {
    color?: 'primary' | 'secondary',
    relatedProjects: ProjectProp[]
}

export const RelatedProjectsContainer:React.FC<RelatedProjectsContainer> = ({ color = 'primary', relatedProjects = [] }) => {

    return (
        <article className={`bg-${color} related-projects`}>
            <h2 className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Related Projects</h2>
            <ul className="flex flex-flow related-projects__list">
                {
                    relatedProjects.map(project => (
                        <li key={project.id}>
                            <StoryCard 
                                title={project.name}
                                category={project.category}
                                imageUrl={project.cover}
                                link={`/projects/story/${project.id}`}
                                size='md'
                            />
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}