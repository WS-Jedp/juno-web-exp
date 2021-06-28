import React from 'react'
import { Project, PrismaClient } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { BasicLayout } from '../../layouts/basic'
import { Content } from '../../components/content'
import { ProjectsContainer } from '../../containers/projects/all'

export interface ProjectProp extends Omit<Project, 'createdAt'|'updatedAt'|'finishedAt'> {
    createdAt?: string,
    updatedAt?: string,
    finishedAt?: string,
}

interface AboutProps {
    personalProjects: ProjectProp[]
}

export const getStaticProps:GetStaticProps<AboutProps> = async (context) => {

    const prisma = new PrismaClient()
    const personalProjects = await prisma.project.findMany({ take: 4 })

    const personalProjectsMapped = personalProjects.map(project => ({...project, createdAt: project.createdAt.toString(), updatedAt: project.updatedAt?.toString(), finishedAt: project.finishedAt?.toString()}))
    return {
        props: {
            personalProjects: personalProjectsMapped
        }
    }
}

const Projects:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ personalProjects }) => {
    return (
        <BasicLayout
            color="primary"
        >

            <section className="bg-primary projects">
                <Content
                    color="white"
                    size="mid"
                    position="start"
                >
                    <h1>Projects</h1>
                    <p>
                        Know the stories of each project that inspired Juno to help become reality the ideas behind the project.
                    </p>
                </Content>
            </section>

            <ProjectsContainer 
                projects={personalProjects}
                action={() => {}}
            />

        </BasicLayout>
    )
}

export default Projects