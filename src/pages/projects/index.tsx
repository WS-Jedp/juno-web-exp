import React from 'react'
import { motion as m } from 'framer-motion'
import { Project, PrismaClient } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { AnimationBottomToTop, AnimationFatherContainer } from '../../assets/styles/animations/variants'

import { BasicLayout } from '../../layouts/basic'
import { Content } from '../../components/content'
import { ProjectsContainer } from '../../containers/projects/all'

export interface ProjectProp extends Omit<Project, 'createdAt'|'updatedAt'|'finishedAt'> {
    createdAt?: string,
    updatedAt?: string | null,
    finishedAt?: string | null,
}

interface AboutProps {
    personalProjects: ProjectProp[]
}

export const getStaticProps:GetStaticProps<AboutProps> = async (context) => {

    const prisma = new PrismaClient()
    const personalProjects = await prisma.project.findMany({ take: 4 })

    const personalProjectsMapped = personalProjects.map(project => ({...project, createdAt: project.createdAt && project.createdAt.toString(), updatedAt: project.updatedAt && project.updatedAt.toString(), finishedAt: project.finishedAt && project.finishedAt.toString()}))
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

            <m.section variants={AnimationFatherContainer({ duration: 2.1, ease: 'easeInOut' })} className="bg-primary projects">
                <Content
                    color="white"
                    size="mid"
                    position="start"
                    variants={AnimationFatherContainer()}
                >
                    <m.h1 variants={AnimationBottomToTop()}>Projects</m.h1>
                    <m.p variants={AnimationBottomToTop()}>
                        Know the stories of each project that inspired Juno to help become reality the ideas behind the project.
                    </m.p>
                </Content>
            </m.section>

            <ProjectsContainer 
                projects={personalProjects}
                action={() => {}}
            />

        </BasicLayout>
    )
}

export default Projects