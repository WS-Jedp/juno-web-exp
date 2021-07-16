import React from 'react'
import { Idea, PrismaClient } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { IdeasCelestialBodies } from '../../tools/content/celestialBodies'

import { BasicLayout } from '../../layouts/basic'
import { ExploreContainer } from '../../containers/explore'
import { MainIdeasContainer } from '../../containers/ideas/main'

export interface IdeaProps extends Omit<Idea, 'createdAt'|'updatedAt'> {
    createdAt: string,
    updatedAt?: string | null
}

interface IdeasProps {
    ideas: IdeaProps[]
}

export const getStaticProps:GetStaticProps<IdeasProps> = async () => {

    const prisma = new PrismaClient()
    const ideas = await prisma.idea.findMany()
    const ideasMapped = ideas.map(idea => ({...idea, createdAt: idea.createdAt.toString(), updatedAt: idea.updatedAt && idea.updatedAt?.toString()}))

    return {
        props: {
            ideas: ideasMapped
        }
    }
}

const Ideas:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ ideas }) => {

    const router = useRouter()

    return (
        <BasicLayout color="primary">
            <ExploreContainer 
                title="Juno's State"
                description="Read about the ideas, vision, news and possible future projects that Juno will  create. Find the latest states and ways of work that Juno has."
                content={IdeasCelestialBodies}
                onExplore={() => router.push('#main-ideas')}
                color="primary"
            />
            <MainIdeasContainer 
                color="secondary"
                ideas={ideas}
            />
        </BasicLayout>
    )
}

export default Ideas