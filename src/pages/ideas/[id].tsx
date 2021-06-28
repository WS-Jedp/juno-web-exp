import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Idea, StoryContent, PrismaClient } from '@prisma/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { defineCategoryColor } from '../../tools/functions/defineCategoryColor'

import { LayoutStory } from '../../layouts/story'

import { RelatedIdeasContainer } from '../../containers/ideas/related'

interface IdeaProp extends Omit<Idea, 'createdAt'> {
    createdAt: string,
}

interface PropsStory {
    idea: (IdeaProp & {storyContent: StoryContent | null}) | null
    relatedIdeas: Idea[],
}

export const getServerSideProps:GetServerSideProps<PropsStory> = async (context) => {

    const prisma = new PrismaClient()
    const idea = await prisma.idea.findUnique({ where: { id: Number(context.query.id) }, include: { storyContent: true } })
    const relatedIdeas = await prisma.idea.findMany({ where: { category: idea?.category, NOT: { id: idea?.id } }, take: 5 })


    return {
        props: {
            idea: idea ? { ...idea, createdAt: idea?.createdAt.toString() } : null,
            relatedIdeas: relatedIdeas
        }
    }

}

const IdeaStory:React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ idea, relatedIdeas }) => {

    if(!idea || !idea.storyContent) {
        return (
            <LayoutStory>
                <section className="flex flex-row align-center justify-center idea-story idea-story__not-found">
                    <h3 className="text-center">
                        Sorry, we can't find that Idea
                    </h3>
                </section>
            </LayoutStory>
        )
    }

    return (
        <LayoutStory color="primary">
            <figure className="idea-story__cover">
                <img title={idea.title} alt={idea.title} src={idea.cover} />
            </figure>
            <section className="idea-story idea-story__header">
                <a className="color-primary">Go Back</a>
                <h3 className={defineCategoryColor({ category: idea.category.toLowerCase() })}>{idea.category.toLowerCase()}</h3>
                <h1 className="color-primary">{idea.title}</h1>
                <p className="color-primary">
                    {
                        idea.introductoryQuestion
                    }
                </p>
                <p className="color-primary">
                    {
                        idea.abstract
                    }
                </p>
            </section>
            <section className="idea-story idea-story__content">
                <ReactMarkdown
                    plugins={[gfm]}
                    children={idea.storyContent.content}
                />
            </section>
            {
                relatedIdeas.length > 0 && (
                    <RelatedIdeasContainer 
                        relatedIdeas={relatedIdeas}
                        ideaType={idea.category}
                        color="secondary"
                    />
                )
            }
        </LayoutStory>
    )
}

export default IdeaStory