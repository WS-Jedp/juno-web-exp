import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Project, PrismaClient, Partner } from '@prisma/client'

import { StudioCelestialBodies } from '../../tools/content/celestialBodies'

import { BasicLayout } from '../../layouts/basic'

import { ExploreContainer } from '../../containers/explore'
import { ServicesContainer } from '../../containers/services'
import { ProcessesContainer } from '../../containers/processes'
import { LastProjectsContainer } from '../../containers/projects/last'
import { PartnersContainer } from '../../containers/partners'

interface PropsStudio {
    lastProjects: Project[],
    partners: Partner[]
}

export const getStaticProps:GetStaticProps<PropsStudio> = async (context) => {

    const prisma = new PrismaClient()
    const lastProjects = await prisma.project.findMany({ where: { state: 'ACCOMPLISHED' }, orderBy: { createdAt: 'desc' }, take: 3})
    const partners = await prisma.partner.findMany({ where: { NOT: { partnerCategory: 'SOCIAL' } }})

    return {
        props: {
            lastProjects: lastProjects,
            partners
        }
    }

}

const Studio:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ lastProjects, partners }) => {

    return (
        <BasicLayout color="secondary">
            <ExploreContainer
                title="Studio"            
                description="Find out all the services that can help you to make your idea reality. Also find out all the projects and ideas that Juno and his allies have been working on"
                onExplore={() => {}}
                color="secondary"
                content={StudioCelestialBodies}

            />
            <ServicesContainer 
                position="start"
                color="primary"
            />
            <ProcessesContainer 
                position="end"
                color="primary"
            />
            {
                lastProjects.length > 0 && (
                    <LastProjectsContainer 
                        lastProjects={lastProjects}
                        color="secondary"
                    />
                )
            }
            {
                partners.length > 0 && (
                    <PartnersContainer 
                        partners={partners}
                        color="secondary"
                    />
                )
            }
        </BasicLayout>
    )
}

export default Studio