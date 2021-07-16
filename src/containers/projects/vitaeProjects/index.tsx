import React from 'react'
import { Project } from '../../../tools/content/vitae'

import { ProjectCard } from '../../../components/projects/card'

interface ProjectsList {
    projects: Project[],
}

export const ProjectsList:React.FC<ProjectsList> = ({ projects }) => {
    return (
        <ul className="flex flex-row align-start justify-start knowledges-list__list">
            {
                projects.map(project => (
                    <li key={project.id}>
                        <ProjectCard 
                            title={project.title}
                            description={project.description}
                            time={project.time}
                            role={project.role}
                            link={project.link}
                        />
                    </li>
                ))
            }
        </ul>
    )
}