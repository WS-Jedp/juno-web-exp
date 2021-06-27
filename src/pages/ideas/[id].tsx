import React from 'react'
import { Idea, StoryContent, PrismaClient } from '@prisma/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { LayoutStory } from '../../layouts/story'

import { RelatedIdeasContainer } from '../../containers/ideas/related'
interface PropsStory {
    idea: (Idea & {storyContent: StoryContent | null}) | null
    relatedIdeas: Idea[]
}

export const getServerSideProps:GetServerSideProps<PropsStory> = async (context) => {

    const prisma = new PrismaClient()
    // const idea = await prisma.idea.findUnique({ where: { id: Number(context.query.id) }, include: { storyContent: true } })
    // const relatedIdeas = await prisma.idea.findMany({ where: { category: idea?.category, NOT: { id: idea?.id } }, take: 5 })

    return {
        props: {
            idea: {
                id: 1, 
                abstract: 'Just a little abstract to see', 
                category: 'ARTICLE', 
                cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/RWS_Tarot_01_Magician.jpg/320px-RWS_Tarot_01_Magician.jpg', 
                createdAt: new Date(), 
                introductoryQuestion: 'There is something more?', 
                storyContentId: 1, title: 'Test Idea', 
                updatedAt: null,
                storyContent: {
                    content: 'Welcome',
                    id: 1
                } 
            },
            relatedIdeas: []
        }
    }

}

const ProjectStory:React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ idea, relatedIdeas }) => {

    if(!idea) {
        return (
            <h1>Not Found!</h1>
        )
    }

    return (
        <LayoutStory color="primary">
            <figure className="idea-story__cover">
                <img title={idea.title} alt={idea.title} src={idea.cover} />
            </figure>
            <section className="idea-story idea-story__header">
                <a>Go Back</a>
                <b>{idea.category.toLowerCase()}</b>
                <h1>{idea.title}</h1>
            </section>
            <section className="idea-story idea-story__content">
                {
                    idea.storyContent?.content
                }
            </section>
            <RelatedIdeasContainer 
                relatedIdeas={relatedIdeas}
                ideaType={idea.category}
                color="secondary"
            />
        </LayoutStory>
    )
}

export default ProjectStory