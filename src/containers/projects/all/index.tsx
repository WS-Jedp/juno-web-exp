import React, { useState } from 'react'
import { Project } from '@prisma/client'

import { StoryCard } from '../../../components/stories/card'
import { ButtonCircle } from '../../../components/buttons/circle'

import { ProjectProp } from '../../../pages/projects'

interface ProjectsContainer {
    projects: ProjectProp[],
    action: () => void
}

export const ProjectsContainer:React.FC<ProjectsContainer> = ({ projects, action }) => {

    const [currentProjects, setCurrentProjects] = useState<ProjectProp[]>(projects)

    return (
        <section className="flex flex-col align-center justify-start bg-secondary projects-container">
            <article className="projects-container__projects">
                {
                    currentProjects.map(project => (
                        <StoryCard
                            key={project.id}
                            title={project.name}
                            size="lg"
                            category={project.category}
                            imageUrl={project.cover}
                            link={`/projects/story/${project.id}`}
                            color="primary"
                        />
                    ))
                }
            </article>
            {/* <ButtonCircle 
                title="See All"
                color="secondary"
                action={action}
            /> */}
        </section>
    )
}