import React from 'react'
import { Idea, PrismaClient } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { SmallBasicLayout } from '../../../layouts/smallBasic'
import { IdeasList } from '../../../containers/ideas/list'

export interface IdeaProps extends Omit<Idea, 'createdAt'|'updatedAt'> {
    createdAt: string,
    updatedAt?: string | null
}

interface IdeasProps {
    ideas: IdeaProps[]
}

export const getStaticProps:GetStaticProps<IdeasProps> = async () => {

    const prisma = new PrismaClient()
    const ideas = await prisma.idea.findMany({ where: { category: 'ARTICLE' } })
    const ideasMapped = ideas.map(idea => ({...idea, createdAt: idea.createdAt.toString(), updatedAt: idea.updatedAt && idea.updatedAt.toString()}))

    return {
        props: {
            ideas: ideasMapped
        }
    }
}

const ArticleIdeas:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ ideas }) => {

    return (
        <SmallBasicLayout 
            color="primary"
            title="Juno's Articles"
            abstract="Learn about new ideas from the point of view of Juno"    
        >
            <IdeasList 
                color="secondary"
                ideas={ideas}
            />
        </SmallBasicLayout>
    )
}

export default ArticleIdeas