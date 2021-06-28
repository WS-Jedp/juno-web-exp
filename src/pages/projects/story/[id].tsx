import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Project, StoryContent, Partner, PrismaClient } from '@prisma/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { defineCategoryColor } from '../../../tools/functions/defineCategoryColor'

import { LayoutStory } from '../../../layouts/story'

import { RelatedProjectsContainer } from '../../../containers/projects/related'

interface ProjectProp extends Omit<Project, 'createdAt'|'updatedAt'|'finishedAt'> {
    createdAt: string,
    updatedAt?: string | null,
    finishedAt?: string | null,
}

interface PropsProjectStory {
    project: (ProjectProp & {storyContent: StoryContent | null}) | null
    relatedProjects: Project[],
}

export const getServerSideProps:GetServerSideProps<PropsProjectStory> = async (context) => {

    const prisma = new PrismaClient()
    const project = await prisma.project.findUnique({ where: { id: Number(context.query.id) }, include: { storyContent: true } })
    const relatedProjects = await prisma.project.findMany({ where: { category: project?.category }, take: 5})

    return {
        props: {
            project: project ? {...project, createdAt: project?.createdAt.toString(), updatedAt: project?.updatedAt?.toString(), finishedAt: project?.finishedAt?.toString()} : null,
            relatedProjects
        }
    }

}

const ProjectStory:React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ project, relatedProjects }) => {

    if(!project || !project.storyContent) {
        return (
            <LayoutStory>
                <section className="flex flex-row align-center justify-center project-story project-story__not-found">
                    <h3 className="text-center">
                        Sorry, we can't find that Project
                    </h3>
                </section>
            </LayoutStory>
        )
    }

    return (
        <LayoutStory color="primary">
            <figure className="project-story__cover">
                <img title={project.name} alt={project.name} src={project.cover} />
            </figure>
            <section className="project-story project-story__header">
                <a className="color-primary">Go Back</a>
                <h3 className={defineCategoryColor({ category: project.category.toLowerCase() })}>{project.category.toLowerCase()}</h3>
                <h1 className="color-primary">{project.name}</h1>
                <p className="color-primary">
                    {
                        project.abstract
                    }
                </p>
                <p className="color-primary">
                    {
                        project.description
                    }
                </p>
            </section>
            <section className="project-story project-story__content">
                <ReactMarkdown
                    plugins={[gfm]}
                    children={project.storyContent.content}
                />
            </section>
            {
                relatedProjects.length > 0 && (
                    <RelatedProjectsContainer 
                        relatedProjects={relatedProjects}
                        color="secondary"
                    />
                )
            }
        </LayoutStory>
    )
}

export default ProjectStory