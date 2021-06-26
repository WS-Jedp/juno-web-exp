import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Project, PrismaClient } from '@prisma/client'
import { BasicLayout } from '../layouts/basic'

import { HomeCelestialBodies } from '../tools/content/celestialBodies'
import { ideaCategories } from '../tools/content/state'

import { Content } from '../components/content'
import { IdeaCategoryCard } from '../components/ideas/categoryCard'
import { ButtonLink } from '../components/buttons/link'

import { ExploreContainer } from '../containers/explore'
import { ServicesContainer } from '../containers/services'
import { ProcessesContainer } from '../containers/processes'
import { ContactContainer } from '../containers/contact'
import { SpecialProjects } from '../containers/projects/special'

interface PropsHome {
    specialProjects: Project[]
}

export const getStaticProps:GetStaticProps<PropsHome> = async (context) =>  {
    const prisma = new PrismaClient()
    const specialProjects = await prisma.project.findMany({ where: { category: 'ART', OR: { category: 'SCIENCE' }}, take: 10 })
    return {
        props: {
            specialProjects
        }
    }
} 

const Home:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ specialProjects }) => {    


    return (
        <BasicLayout>
            <ExploreContainer 
                title="One Person Creative Studio"
                description="Let's bring your ideas into reality"
                content={HomeCelestialBodies}
                onExplore={() => {}}
            />
            
            <section id="purposes" className="bg-secondary flex flex-col justify-between home home__purposes">
                    <Content
                        position="end"
                        size="mid"
                    >
                        <h2 className="color-primary">Purposes</h2>
                        <p className="color-primary">Let’s create a new world where every person can live their dreams and keep alive the gift of life.</p>
                    </Content>

                    <Content
                        position="start"
                        size="mid"
                    >
                        <p className="color-primary">Let’s create new ideas that help humankind to find reasons to live, to enjoy life and keep moving forward.</p>
                    </Content>
                    
            </section>

            <ServicesContainer 
                position="start"
                color="primary"
            />

            <ProcessesContainer 
                position="end"
            />
            
            
            {
                specialProjects.length > 0 && (
                    <SpecialProjects 
                        specialProjects={specialProjects}
                        color="primary"
                    />
                )
            }                    

            <section className="bg-secondary flex flex-col  home home__state">
                    <Content
                        position="start"
                        size="mid"
                    >
                        <h2 className="color-primary">Juno's State</h2>
                        <p className="color-primary">Read about the ideas, vision, news and possible future projects that Juno will  create. Find the latest states and ways of work that Juno has.</p>
                    </Content>

                    <ul className="flex flex-row align-start justify-start home__state-list">
                        <IdeaCategoryCard 
                            {...ideaCategories['articles']}
                        />
                        <IdeaCategoryCard 
                            {...ideaCategories['essays']}
                        />
                        <IdeaCategoryCard 
                            {...ideaCategories['state']}
                        />
                    </ul>
                    <ButtonLink 
                        link="/ideas"
                        title="See All"
                        color="primary"
                    />
            </section>
        </BasicLayout>
    )
}  

export default Home
