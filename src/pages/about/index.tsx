import React from 'react'
import { Project, PrismaClient } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import router, { useRouter } from 'next/router' 

import { AboutCelestialBodies } from '../../tools/content/celestialBodies'

import { BasicLayout } from '../../layouts/basic'
import { Content } from '../../components/content'

import { ExploreContainer } from '../../containers/explore'
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
    const personalProjects = await prisma.project.findMany({ where: { category: 'SOCIAL' }, take: 4 })

    const personalProjectsMapped = personalProjects.map(project => ({...project, createdAt: project.createdAt.toString(), updatedAt: project.updatedAt && project.updatedAt.toString(), finishedAt: project.finishedAt && project.finishedAt.toString()}))
    return {
        props: {
            personalProjects: personalProjectsMapped
        }
    }
}

const About:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ personalProjects }) => {

    const router = useRouter()

    return (
        <BasicLayout color="primary">
            <ExploreContainer 
                title="Willing To Dream"
                description="Juno is an One Person Creative Studio based in Medellín, Colombia that helps you to convert your ideas into meaningful projects that impact the life of people, generating changes in our society and keep moving forward the humankind."
                content={AboutCelestialBodies}
                color="primary"
                onExplore={() => router.push('#juno')}
            />
            <section id="juno" className="bg-secondary about about__content">
                <Content 
                    position="end"
                    color="white"
                    size="mid"
                >
                    <h2 className="color-primary">About Juno</h2>
                    <p className="color-primary">
                        Juno is the representation of the intrinsic will of humankind, the representation of the force to keep moving forward.
                    </p>
                </Content>

                <article className="flex align-start about__content-why">
                    <Content 
                        position="start"
                        color="white"
                        size="full"
                    >
                        <h3 className="color-primary">Why Exists?</h3>
                        <p className="color-primary">
                            It exists to continue advancing humanity. Dreams are the reason Juno lives, dreams are humanity's main source of energy and motivation.
                        </p>
                    </Content>
                    <Content 
                        position="start"
                        color="white"
                        size="full"
                    >
                        <h3 className="color-primary">Purpose</h3>
                        <p className="color-primary">
                            Make dreams come true. Create a world where the will of each being is free, a world where you can dream and live in freedom.
                        </p>
                    </Content>
                </article>
            </section>

            {
                personalProjects.length > 0 && (
                    <>
                    <section className="bg-primary about about__projects">
                        <Content
                            color="white"
                            size="full"
                            position="start"
                        >
                            <h2>Personal Projects</h2>
                            <p>These projects are special, because the humankind to keep moving forward, so if you can help them grow up I will be really thankful with you or if you want to make part of one of them let’s talk about it.</p>
                        </Content>

                        </section>
                        <ProjectsContainer 
                        projects={personalProjects}
                        action={() => {}}
                        />
                    </>
                )
            }
        </BasicLayout>
    )
}

export default About