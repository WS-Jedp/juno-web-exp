import React from 'react'
import { Project } from '@prisma/client'

import { ButtonLink } from '../../../components/buttons/link'
import { Content } from '../../../components/content'
import { StoryCard } from '../../../components/stories/card'

interface SpecialProjects {
    specialProjects: Project[],
    color?: 'primary' | 'secondary'
}

export const SpecialProjects:React.FC<SpecialProjects> = ({ specialProjects, color = 'secondary' }) => {

    return (
        <>
            <section className={`bg-${color === 'primary' ? 'primary' : 'secondary'} special-projects-container`}>
                <Content
                    position="start"
                    size="mid"
                >
                    <h2 className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Special Projects</h2>
                    <p className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>The best ideas are created when we think about others. Social entrepreneurship is really special in this world and we needed more than ever in times like today. So please, if you can support them we'll be really grateful.</p>
                </Content>
                
            </section>
            <article className={`bg-${color === 'primary' ? 'secondary' : 'primary'} flex flex-row special-projects-container__projects`}>
                <ButtonLink 
                    link="/projects"
                    title="See All"
                    color={color === 'primary' ? 'primary' : 'secondary'}
                />
                <ul className="flex special-projects-container__projects-list">
                    {
                        specialProjects.map(project => (
                            <StoryCard 
                                key={project.id}
                                category={project.category}
                                imageUrl={project.cover}
                                link={`/story/${project.id}`}
                                title={project.name}
                                size="md"
                                color={color}
                            />
                        ))
                    }
                </ul>

            </article>
        </>
    )
}